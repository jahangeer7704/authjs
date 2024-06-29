'use server'
import * as z from 'zod'
import { formSchema } from '@/authjs/schema/formschema'
import { apiAuth } from '@/Routes'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
export const login = async (value: z.infer<typeof formSchema>) => {
    try {
        const validate = formSchema.safeParse(value)
        if (validate.error) {
            return { error: "Invalid fields" }
        }
        const { email, password } = validate.data
        await signIn("credentials", {
            email,
            password,
            redirectTo: apiAuth
        })
    }
    catch (error) {

        if (error instanceof AuthError) {

            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" }
                case "AccessDenied":
                    return { error: "verify your email" }
                default:
                    return { error: "something went wrong" }
            }
        }
        throw error
    }

}