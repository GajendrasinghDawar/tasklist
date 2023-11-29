/** @return { import("next-auth").NextAuthConfig } */

import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { sendVerificationRequest } from "utils/sendVerificationRequest"

import PostgresAdapter from "@auth/pg-adapter"
import { pool } from "db/connect"

export const authConfig = {
    pages: {
        signIn: 'auth/sign-in',
        verifyRequest: '/auth/verify-request',
    },
    adapter: PostgresAdapter(pool),
    providers: [
        Google,
        {
            id: "resend",
            type: "email",
            sendVerificationRequest
        }
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.user.id = user.id
            return session
        },
    },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)