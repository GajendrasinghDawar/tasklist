"use server"

import { pool } from 'db/connect'
import { revalidatePath } from "next/cache"


export async function deleteData(id) {
    const queryOptions = {
        text: `DELETE FROM task
WHERE id = $1`,
        values: [id],
    }
    await pool.query(queryOptions)

    revalidatePath("/")

}