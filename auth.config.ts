import type {
    NextAuthConfig
} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from "next-auth/providers/github"
import { formSchema } from './schema/formschema'
import getUserByEmail from "@/dbData"
import bcrypt from 'bcryptjs'
export default {
    providers: [Github({
        clientId: process.env.GITGUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        authorization: {
            params: {
              scope: 'read:user user:email' // Make sure these scopes are appropriate for your needs
            }
          }
    }),
    Credentials({
        async authorize(credentials) {
            const validate = formSchema.safeParse(await credentials)
            if (validate.success) {

                const { email, password } = validate.data
                console.log(password);

                const user = await getUserByEmail(email)
                if (!user || !user.password) { return null }

                const passwordMatch = await bcrypt.compare(password, user.password)
                if (passwordMatch) return user
            }
            return null

        }
    })]

} satisfies NextAuthConfig