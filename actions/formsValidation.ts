'use server'
import * as z from 'zod'
import { db } from '@/lib/db'
import { regFormSchema } from '@/authjs/schema/formschema'
import bcrypt from 'bcrypt'
export const registerValidation = async (value: z.infer<typeof regFormSchema>) => {

    try {
        await db.$connect()
        const validate = regFormSchema.safeParse(value)
        if (!validate.success) {

            return { error: "error occured" }
        }
        const { email, password, name } = validate.data
        const emailExist = await db.user.findUnique({
            where: {
                email
            }
        })
        if (emailExist) { return { error: "email already exist" } }
        const hashedPass=await bcrypt.hash(password,10)
        await db.user.create({
            data: {
                name,
                email,
                password:hashedPass
            }

        })



        return { message: "Email sent" }

    } catch (error) {
        console.log(error);

        return { error: "error occured" }

    }

}