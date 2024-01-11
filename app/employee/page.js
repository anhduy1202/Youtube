'use client'
import { useEffect, useState } from 'react'
import employees from './employees.json'
import { SignOutButton, useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation';

export default function EmployeePage() {
    const { user } = useUser();
    const [filteredEmployees, setFilteredEmployees] = useState(employees.employees)
    const handleDelete = async (employee) => {
        try {
            const res = await fetch('/api/employee', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ employee, filteredEmployees})
            })
            const data = await res.json()
            if (data.error) {
                window.alert(data.error)
                return
            }
            setFilteredEmployees(data.employees)
        } catch (err) {
            console.warn(err)
        }
    }
    useEffect(() => {
        if (user) {
            if (user.publicMetadata.role !== 'admin' && user.publicMetadata.role !== 'employee') {
                console.log('not admin')
                redirect('/')
            }
        }
    }, [user])
    return (
        <main className="bg-white flex min-h-screen flex-col text-black">
            <div className='flex flex-col items-center justify-center mt-24'>
                <SignOutButton />
                <p>Your role: {user?.publicMetadata?.role}</p>
                <p className='text-[2rem] font-bold text-emerald-600'>Employee Console</p>
                <div className='mt-4'>
                    {filteredEmployees?.map((employee, idx) => {
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
