import pkg from "pg";
import Debug from "debug";

const debug = Debug("app:db");

const { Pool } = pkg;

export const pool = new Pool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.on("connect", () => {
  debug("connection pool established with database");
});

pool.on("error", (err) => {
  debug(err);
  process.exit(1);
});
