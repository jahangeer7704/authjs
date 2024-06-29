"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Success from '../Success'
import Error from '../Error'
import { registerValidation } from '@/actions/formsValidation'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { regFormSchema } from '@/authjs/schema/formschema'

function Fields() {
    const [error,setError]=useState<{error:string |undefined}>({error:""})
    const [success,setSuccess]=useState<{message:string |undefined}>({message:""})
    const form = useForm<z.infer<typeof regFormSchema>>({
        resolver: zodResolver(regFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    function onSubmit(values: z.infer<typeof regFormSchema>) {
        setError({error:""})
        setSuccess({message:""})
registerValidation(values).then((data)=>{

    if("error" in data){
        console.log(data);
        
setError({error:data.error})
    }
    else{
        setSuccess({message:data.message})
    }
})
form.reset()
    }
    return (
        <div className='p-4 w-full' >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="jk" {...field} type='text' />
                                </FormControl>

                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@mail.com" {...field} type='name' />
                                </FormControl>

                                <FormMessage />
                            </FormItem>

                        )}
                    /> <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" {...field} type='password' />
                                </FormControl>

                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <div className='flex justify-center flex-col'>
                        <Success message={success.message} />
                        <Error message={error.error} />

                        <Button className='p-5 w-full' type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>

    )
}

export default Fields