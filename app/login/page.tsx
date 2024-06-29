import React from 'react'
import Header from '@/components/Header'
import Provider from '@/components/Provider'
import Fields from "@/components/login/Fields"
import Link from 'next/link'
function Page() {
    return (
        <div className='bg-teal-200 h-screen flex justify-center items-center'>
            <main className='bg-white h-max flex flex-col justify-center sm:w-1/2 items-center p-3 rounded-lg overflow-scroll lg:w-[600px]'>

                <Header label='🔐 AUTH' message="Welcome back!" />
                <Fields />
                <Provider />
                <Link className='p-5 underline' href={"/register"}> Dont't have a account</Link>
            </main>

        </div>
    )
}

export default Page