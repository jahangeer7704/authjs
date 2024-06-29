import React from 'react'
import { FiAlertTriangle } from "react-icons/fi"; 

function Error({ message }: { message: string | undefined }) {
    if (!message) {

        return null
    }
    return (
        <div className='flex bg-destructive/20 rounded-lg m-2'>
            <p className='p-3 flex justify-center items-center gap-4 text-destructive'><FiAlertTriangle className='inline  text-3xl' /> {message}</p>

        </div>
    )
}

export default Error