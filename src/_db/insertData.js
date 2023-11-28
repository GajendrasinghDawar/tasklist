"use server"

import { pool } from 'db/connect'
import { revalidatePath } from "next/cache"

import { auth } from "auth"

export async function insertData(data) {
    const session = await auth()
    const queryOptions = {
        text: 'INSERT INTO task(tasktitle, status,description,user_id) VALUES($1, $2,$3,$4)',
        values: [...data, session.user.id],
    }
    await pool.query(queryOptions)

    revalidatePath("/")

}