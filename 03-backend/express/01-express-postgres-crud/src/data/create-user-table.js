import Debug from "debug";

import { pool } from "../config/db.js";

const debug = Debug("app:data");

export async function createUserTable() {
  const queryText = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  )
  `;

  try {
    pool.query(queryText);
    debug("User table created if not exists");
  } catch (err) {
    debug(err);
  }
}
