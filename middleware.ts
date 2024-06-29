import NextAuth from "next-auth";
import authConfig from "./auth.config";
const { auth } = NextAuth(authConfig)
import {
    apiAuth, apiAuthPrefix, authRoutes, publicRoutes
} from "@/Routes"
export default auth((req) => {
const {nextUrl}=req
const isLogged=!!req.auth

const isApiAuthRoute=nextUrl.pathname.startsWith(apiAuthPrefix)
const isPublicRoutes=publicRoutes.includes(nextUrl.pathname)
const isAuthRoute=authRoutes.includes(nextUrl.pathname)
if(isApiAuthRoute) return null
if(isAuthRoute){
    if(isLogged){
        return Response.redirect(new URL ("/dashboard",nextUrl))
    }
    return null
}

if(!isLogged && !isPublicRoutes){
    return Response.redirect(new URL("/login",nextUrl))
}
return null
})
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}