import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from "./lib/db"
import getUserByEmail from "./dbData"
export const {
    handlers: { GET, POST }


    , auth, signIn, signOut } = NextAuth({
        events: {
            async linkAccount({ user }) {

                await db.$connect()
               const data= await db.user.update({
                    where: { id: user.id },
                    data: { emailVerified: "true" }
                })
                console.log(data);
                
            }
        },
        callbacks: {
            async signIn({ user, account }) {
                if (account) {



                    if (user.email) {

                        const existUser = await getUserByEmail( user?.email)

                        if (!existUser?.emailVerified) {
                            console.log({ obj: "yse i throw" });

                            return false
                        }
                    }

                }

                return true
            },
            async session({ token, session }) {
                if (token.sub && session.user) {
                    session.user.id = token.sub
                    session.user.role = "Admin"
                }

                return session
            }
        }
        ,
        adapter: PrismaAdapter(db),
        session: { strategy: "jwt" },

        ...authConfig
    })