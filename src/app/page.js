import Link from 'next/link'
import { redirect } from "next/navigation"

import { auth } from "auth"
import { Welcome } from "components/Welcome"


export default async function Home() {
  const session = await auth()
  if (!session?.user) return (
    redirect("auth/sign-in")
  )
  return (
    <div className="md:w-9/12 mx-auto w-full  h-full flex flex-col overflow-y-auto gap-1 px-1">
      <div className="grid place-content-center h-full w-full">
        <Welcome user={session?.user} />
        <button className=" my-4 bg-iris9 w-max inline-flex mx-auto  rounded-md py-1 px-2 justify-center items-center h-8 sm:h-11">
          <Link
            href="/tasklist"
            className="underline-none no-underline text-iris1"
          >
            See pending Task
          </Link></button>
      </div>
    </div>
  )
}
