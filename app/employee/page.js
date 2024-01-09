'use client'
import { useState } from 'react'
import employees from './employees.json'

export default function EmployeePage() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees.employees)
  const handleDelete = (employee) => {
    setFilteredEmployees(filteredEmployees.filter((emp) => emp.name !== employee.name))
  }
  return (
    <main className="bg-white flex min-h-screen flex-col text-black">
      <div className='flex flex-col items-center justify-center mt-24'>
        <p className='text-[2rem] font-bold text-emerald-600'>Employee Console</p>
        <div className='mt-4'>
          {filteredEmployees.map((employee, idx) => {
            return (
              <div key={idx} className='grid grid-cols-3 gap-4 justify-center items-center'>
                <p className='bg-blue-300 p-1 rounded-md my-2'>{employee.name}</p>
                <p className={`${employee.role == 'Employee' ? 'bg-purple-300' : 'bg-gray-400'} p-1 rounded-md`}>{employee.role}</p>
                <button onClick={() => handleDelete(employee)} className='bg-red-300 p-1 rounded-md font-bold hover:bg-red-500 transition-all duration-300'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
