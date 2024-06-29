import * as z from 'zod'
export const regFormSchema = z.object({
    name: z.string().min(1, { message: "name required" }),
    email: z.string().email({
        message: "invalid email"
    }),
    password: z.string().min(1, { message: "password required" }),

})
export const formSchema = z.object({
    email: z.string().email({
      message: "invalid email"
    }),
    password: z.string().min(1, { message: "password required" })
  })
  