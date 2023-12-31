"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Toast } from "ui/Toast"

export default function SignIn() {
    const [open, setOpen] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
        let result = await signIn("resend",
            {
                email: e.target.email.value,
                redirect: false, callbackUrl: '/'
            })
        if (result.error) {
            return null
        } else {
            setOpen(!open)
        }
    }

    return (
        <div className="md:w-9/12 mx-auto w-full  h-full flex-1 flex justify-center items-center overflow-y-auto relative ">
            <div className="flex flex-col border border-iris5 text-center min-w-[250px] p-2 -mt-32 rounded-lg ">
                <div className="inline-flex gap-4 justify-center items-center mt-2">
                    <Panda />
                    <h1 className="font-bold text-iris12 sm:text-3xl">
                        Sign In
                    </h1>
                </div>
                <form className="flex flex-col gap-2 text-iris12 mt-5" onSubmit={handleSubmit}>
                    <input
                        className="border bg-iris2 p-2 border-sand5 rounded-md text-center text-sand11 focus:outline-none focus:ring-2 focus:ring-iris7 focus:border-transparent"
                        type="email"
                        name="email"
                        required
                        placeholder="enter your email"
                    />
                    <button
                        className="p-2 rounded-md bg-iris9 text-iris1 focus:ring-2 focus:ring-iris7 focus:border-transparent focus:outline-none"
                    >Sign in with Email</button>
                </form>
                <hr className="mt-5 bg-iris5 border-1" />
                <div className="w-full">
                    <button
                        className=" w-full p-2 inline-flex gap-2 border rounded-md justify-center items-center my-4 bg-green3 text-green12 border-green5 focus:ring-2 focus:ring-green7 focus:border-transparent focus:outline-none"
                        onClick={() => signIn("google", { callbackUrl: '/' })
                        }>
                        <Logo />
                        Sign in with Google
                    </button>
                </div>
            </div>
            <Toast open={open} onOpenChange={() => setOpen(!open)} >
                <div className="flex gap-1">
                    <div>
                        <Toast.Title>Check your email inbox!</Toast.Title>
                        <Toast.Description>
                            A sign in link has been sent to your email address.
                        </Toast.Description>
                    </div>
                    <Toast.Action asChild altText="Check your email inbox!">
                        <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] h-[25px] bg-iris9 text-iris1 border border-iris5   shadow-iris7 hover:shadow-[inset_0_0_0_1px] hover:shadow-iris8 focus:shadow-[0_0_0_2px] focus:shadow-iris8">
                            Undo
                        </button>
                    </Toast.Action>
                </div>
            </Toast>
        </div>
    )
}

function Logo() {
    return (
        <svg

            viewBox="0 0 100 100" className="h-5 w-5"><linearGradient id="b" x1="55.41" x2="12.11" y1="96.87" y2="21.87" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1e8e3e"></stop><stop offset="1" stopColor="#34a853"></stop></linearGradient><linearGradient id="c" x1="42.7" x2="86" y1="100" y2="25.13" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fcc934"></stop><stop offset="1" stopColor="#fbbc04"></stop></linearGradient><linearGradient id="a" x1="6.7" x2="93.29" y1="31.25" y2="31.25" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d93025"></stop><stop offset="1" stopColor="#ea4335"></stop></linearGradient><path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z"></path><path fill="url(#b)" d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z"></path><path fill="url(#c)" d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z"></path><path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z"></path><path fill="#1a73e8" d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z"></path> </svg>
    )
}
function Panda() {
    return (
        <svg
            className="fill-iris12"
            viewBox="0 0 50 50"
            width="38px"
            height="38px"><path d="M 7.625 0 C 5.847656 0 4.011719 0.890625 2.46875 2.5 C -0.492188 5.589844 -0.792969 9.128906 1.6875 11.71875 C 2.382813 12.414063 3.277344 12.984375 4.34375 13.4375 C 1.605469 17.507813 0 22.28125 0 27.09375 C 0 35.382813 4.980469 40.929688 12.15625 43.53125 C 13.921875 44.148438 15.546875 45.464844 17.125 46.84375 C 17.132813 46.847656 17.148438 46.839844 17.15625 46.84375 C 19.203125 48.667969 21.917969 50 24.90625 50 C 27.863281 50 30.589844 48.789063 32.65625 46.84375 C 32.667969 46.832031 32.675781 46.824219 32.6875 46.8125 C 34.261719 45.4375 35.863281 44.148438 37.625 43.53125 C 45 40.933594 50 35.382813 50 27.09375 C 50 22.28125 48.394531 17.507813 45.65625 13.4375 C 46.722656 12.984375 47.597656 12.402344 48.28125 11.71875 C 49.421875 10.628906 50.046875 9.289063 50.0625 7.8125 C 50.082031 5.988281 49.191406 4.097656 47.59375 2.5 C 46.039063 0.945313 44.1875 0.09375 42.375 0.09375 C 40.878906 0.09375 39.523438 0.664063 38.40625 1.78125 C 37.566406 2.621094 36.867188 3.75 36.4375 4.96875 C 33.019531 3.09375 29.132813 2 25 2 C 20.867188 2 16.980469 3.09375 13.5625 4.96875 C 13.132813 3.75 12.453125 2.640625 11.625 1.8125 C 10.5 0.636719 9.113281 0 7.625 0 Z M 25 4 C 37.699219 4 48 15.582031 48 27.09375 C 48 34.605469 43.792969 39.253906 36.96875 41.65625 C 34.742188 42.433594 32.957031 43.929688 31.34375 45.34375 C 31.332031 45.355469 31.324219 45.363281 31.3125 45.375 C 29.582031 47.015625 27.335938 48 24.90625 48 C 22.503906 48 20.21875 46.910156 18.46875 45.34375 C 16.855469 43.929688 15.070313 42.433594 12.84375 41.65625 C 6.21875 39.257813 2 34.605469 2 27.09375 C 2 15.582031 12.300781 4 25 4 Z M 18.3125 19.96875 C 16.039063 19.96875 13.921875 20.765625 12.5 22.1875 C 9.550781 25.136719 9.171875 29.679688 11.6875 32.3125 C 12.796875 33.421875 14.351563 34.03125 16.03125 34.03125 C 18.109375 34.03125 20.210938 33.101563 21.8125 31.5 C 24.835938 28.476563 24.386719 23.292969 22.625 21.40625 C 21.769531 20.492188 20.164063 19.96875 18.3125 19.96875 Z M 31.78125 20 C 29.96875 20 28.328125 20.515625 27.40625 21.375 C 26.523438 22.199219 26 23.746094 25.96875 25.53125 C 25.929688 27.867188 26.726563 30.039063 28.1875 31.5 C 29.789063 33.101563 31.890625 34.03125 33.96875 34.03125 C 35.648438 34.03125 37.1875 33.410156 38.3125 32.28125 C 40.8125 29.664063 40.449219 25.136719 37.5 22.1875 C 36.105469 20.792969 34.023438 20 31.78125 20 Z M 19 23 C 20.105469 23 21 23.894531 21 25 C 21 26.105469 20.105469 27 19 27 C 17.894531 27 17 26.105469 17 25 C 17 23.894531 17.894531 23 19 23 Z M 31 23 C 32.105469 23 33 23.894531 33 25 C 33 26.105469 32.105469 27 31 27 C 29.894531 27 29 26.105469 29 25 C 29 23.894531 29.894531 23 31 23 Z M 21.9375 35.96875 C 20.152344 35.96875 20 37.214844 20 37.59375 C 20 39.289063 22.289063 42 25 42 C 27.710938 42 30 39.289063 30 37.59375 C 30 37.121094 29.820313 36.03125 28.03125 36.03125 C 27.683594 36.03125 27.25 36.050781 26.78125 36.09375 C 25.691406 36.191406 24.277344 36.179688 23.1875 36.0625 C 22.710938 36.011719 22.3125 35.96875 21.9375 35.96875 Z"></path></svg>
    )
}

