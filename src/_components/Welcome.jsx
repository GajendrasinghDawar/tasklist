"use client"

import { motion } from "framer-motion"

export function Welcome({ user }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.88,
        },
      }}
      className="h-full w-full flex flex-col rounded"
    >
      <h1 className="text-4xl sm:text-[5rem] w-full block  flex-1 py-5 bg-clip-text text-transparent  bg-gradient-to-r from-iris11 to-iris12">
        Welcome Back{" "}
      </h1>
      <h2 className="text-center text-2xl lowercase first-letter:uppercase bg-clip-text text-transparent  bg-gradient-to-r from-iris12 to-iris11">
        {user?.name}!
      </h2>
    </motion.div>
  )
}
