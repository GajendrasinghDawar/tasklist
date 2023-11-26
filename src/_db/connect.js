import pg from 'pg';

export const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
})

export const query = (text, params, callback) => {
    return pool.query(text, params, callback)
}