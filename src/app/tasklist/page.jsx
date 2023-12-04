import { redirect } from "next/navigation"

import { auth } from "auth"
import { Tasklist } from "components/Tasklist"
import { pool } from "db/connect"
import { ModalWithForm } from "components/ModelWithForm"

export default async function TaskList() {
  const session = await auth()
  if (!session?.user) {
    return redirect("/api/auth/signin?callbackUrl=/tasklist")
  }
  let result = await pool.query(" select * from task where user_id = $1 ", [
    session.user.id,
  ])

  return (
    <div className="md:w-9/12 mx-auto w-full  h-full flex flex-col overflow-y-auto gap-1 px-1">
      <section className=" sticky top-0  h-10  flex justify-between px-2 my-2">
        <h1>Tasklist</h1>
        <div>
          <ModalWithForm />
        </div>
      </section>

      <Tasklist data={result.rows || []} />
    </div>
  )
}
