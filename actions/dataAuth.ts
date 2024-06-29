'use server'
import { auth } from "@/auth";
export  const getData=async ()=>{
    const data=await auth()
    return data
}