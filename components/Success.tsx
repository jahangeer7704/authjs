import React from 'react'
import { RxCheckCircled } from "react-icons/rx"; 
function Success({message}:{message:string|undefined}) {
    if(!message){

        return null
    }
    return (
        <div className='flex bg-emerald-200 rounded-lg m-2'>
            <p className='p-3 flex justify-center items-center gap-4 text-emerald-800'><RxCheckCircled className='inline  text-3xl'/> {message}</p>
    
        </div>
      )
}

export default Success