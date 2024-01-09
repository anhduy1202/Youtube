'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-white flex min-h-screen flex-col text-black">
      <div className='flex flex-col items-center justify-center mt-24'>
        <p className='text-[2rem] font-bold text-emerald-600'>Public Page</p>
        <div className='mt-4'>
          <button onClick={() => router.push('/employee')} className='bg-blue-300 p-1 rounded-md font-bold hover:bg-blue-500 transition-all duration-300'>Employee Console</button>
        </div>
      </div>
    </main>
  )
}
