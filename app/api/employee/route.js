import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { checkRole } from '@/app/utils/roles';
import employees from '@/app/employee/employees.json'

export async function DELETE(req, res) {
  const request = await req.json()
  if (!checkRole('admin') && !checkRole('employee')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (checkRole('employee')) {
    console.log('employee', request.employee)
    if (request.employee.role === 'admin' || request.employee.role === 'Employee') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }
  const filteredEmployees = request.filteredEmployees.filter((employee) => employee.name !== request.employee.name)
  return NextResponse.json({ employees: filteredEmployees }, { status: 200 })
}

