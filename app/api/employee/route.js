import { NextResponse } from 'next/server';
import { checkRole } from '@/app/utils/roles';

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

