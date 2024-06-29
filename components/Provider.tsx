'use client'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { signIn } from 'next-auth/react'
import { apiAuth } from "@/Routes";
function Provider() {
  const handleClick=(data:"GOOGLE"|"github")=>{
signIn(data,{
  callbackUrl:apiAuth
})
  }
  return (
  <div className="flex  w-full gap-3">
    <Button variant={'outline'} className="p-5 flex-1 ml-4" > <FcGoogle className="h-8 w-8"/></Button>
    <Button variant={'outline'} className="p-5 flex-1 mr-4" onClick={()=>handleClick("github")} > <FaGithub className="h-8 w-8"/></Button>
  </div>
  )
}

export default Provider