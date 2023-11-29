"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function SignIn() {
    let [email, setEmail] = useState("")
    return (
        <div className="flex flex-col max-w-md">
            <h1>Sign In</h1>
            <button className="border p-2" onClick={() => signIn("google", { callbackUrl: '/tasklist' })}>Sign in with Google</button>
            <div>
                <input
                    className="border p-2"
                    type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button
                    className="border p-2"
                    onClick={() => signIn("resend", { email })}>Sign in with Email</button>
            </div>
        </div>)
}



