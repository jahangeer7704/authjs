import React from 'react'

function Header({label,message}:{label:string,message:string}) {
  return (
    <div className='p-5'>
<span className='text-3xl block'>{label}</span>
<span className='text-sm text-gray-500 text-center block p-2'>{message}</span>
    </div>
  )
}

export default Header