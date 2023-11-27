"use server"
import { redirect } from "next/navigation"

export default async function signIn() {
    const url = await signIn(provider, { redirect: false })
    // TODO: fix in next-auth
    redirect(url.replace("signin", "api/auth/signin"))
}