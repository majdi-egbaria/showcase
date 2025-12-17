#!/usr/bin/env node
import { Command } from "commander";

import {
  createDatabase,
  deleteDatabase,
  listDatabases,
} from "./utils/database.js";

const program = new Command();

program
  .name("PostgreSQL CLI")
  .description("CLI for interacting with PostgreSQL Database.")
  .version("1.0.0");

program
  .command("db:list")
  .description("List all databases")
  .action(async () => {
    await listDatabases();
  });

program
  .command("db:create")
  .description("Create a database")
  .argument("<name>", "Name of the database to create")
  .action(async (name) => {
    await createDatabase(name);
  });

program
  .command("db:delete")
  .description("Delete a database")
  .argument("<name>", "Name of the database to create")
  .action(async (name) => {
    await deleteDatabase(name);
  });

program.parse(process.argv);
