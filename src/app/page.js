import { Tasklist } from '@/_components/Tasklist'

import { pool } from 'db/connect'

export default async function Home() {

  let result = await pool.query(' select * from task; ')

  return (
    <div className="md:w-9/12 mx-auto w-full  h-full flex flex-col overflow-y-auto gap-1 px-1">
      <section className=" sticky top-0  h-10  ">
        <h1>Tasklist</h1>
      </section>
      <Tasklist data={result.rows || []} />
    </div>
  )
}
