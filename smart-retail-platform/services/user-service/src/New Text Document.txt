import { Pool } from "pg";

export const pool = new Pool({

 host: "postgres",
 user: "postgres",
 password: "password",
 database: "retail",
 port: 5432

});