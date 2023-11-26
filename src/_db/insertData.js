"use server"

import { pool } from 'db/connect'
import { revalidatePath } from "next/cache"


export async function insertData(data) {
    const queryOptions = {
        text: 'INSERT INTO task(tasktitle, status,description) VALUES($1, $2,$3) RETURNING *',
        values: [...data],
    }
    await pool.query(queryOptions)

    revalidatePath("/")

}