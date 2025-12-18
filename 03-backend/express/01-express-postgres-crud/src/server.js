import http from "node:http";

import Debug from "debug";

import { Application } from "./app.js";
import { createUserTable } from "./data/create-user-table.js";

const debug = Debug("app:server");

async function main() {
  await createUserTable();

  const app = await Application();

  const port = process.env.PORT || 3000;

  const server = http.createServer(app);

  server.listen(port, () => {
    debug(`server is running on http://localhost:${port}`);
  });
}

main();
