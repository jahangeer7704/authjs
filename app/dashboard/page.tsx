'use client'
import { getData } from '@/actions/dataAuth'
import React, { useEffect, useState } from 'react'
 function Dashboard() {
  const [data,setData]=useState<any>()
  useEffect(() =>{
getData().then((data)=>{
  setData(data)
  
})
    
  },[])
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Dashboard