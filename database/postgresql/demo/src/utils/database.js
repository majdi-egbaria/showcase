import { Client } from "pg";

export function createDatabaseConnection() {
  return new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
}

export async function listDatabases() {
  const client = createDatabaseConnection();

  try {
    await client.connect();

    // Check if the database already exists
    const fetchDatabasesQuery = `SELECT * FROM pg_database WHERE datistemplate = false;`;
    const res = await client.query(fetchDatabasesQuery);
    const data = res.rows;
    const names = data.map((item) => item.datname);
    console.info(names);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

export async function createDatabase(dbName) {
  const client = createDatabaseConnection();

  try {
    await client.connect();

    // Check if the database already exists
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = '${dbName}';`;
    const res = await client.query(checkDbQuery);

    if (res.rowCount === 0) {
      // Create the new database
      const createDbQuery = `CREATE DATABASE "${dbName}";`;
      await client.query(createDbQuery);
      console.info(`Database "${dbName}" created successfully.`);
    } else {
      console.info(`Database "${dbName}" already exists.`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

export async function deleteDatabase(dbName) {
  if (dbName === "postgres") {
    console.error("NOT ALLOWED!");
    process.exit(1);
  }

  const client = createDatabaseConnection();

  try {
    await client.connect();

    console.info(`Terminating active connections to '${dbName}'...`);
    await client.query(
      `
      SELECT pg_terminate_backend(pid)
      FROM pg_stat_activity
      WHERE datname = $1 AND pid <> pg_backend_pid();
    `,
      [dbName]
    );
    console.info(`Dropping database '${dbName}'...`);
    await client.query(`DROP DATABASE IF EXISTS "${dbName}";`);
    console.info(`✅ Database '${dbName}' deleted successfully.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
