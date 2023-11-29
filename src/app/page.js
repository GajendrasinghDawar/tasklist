import { auth } from "auth"

import Link from 'next/link'
import { redirect } from "next/navigation"

export default async function Home() {

  const session = await auth()

  if (!session?.user) return (
    redirect("auth/sign-in")
  )

  return (
    <div className="md:w-9/12 mx-auto w-full  h-full flex flex-col overflow-y-auto gap-1 px-1">
      <section className=" sticky top-0  h-10  ">
        <h1>Tasklist</h1>
      </section>
      <code>
        {JSON.stringify(session, null, 2)}
      </code>

      <div>

        <Link href="/tasklist" >
          Tasklist
        </Link>
      </div>
    </div>
  )
}
