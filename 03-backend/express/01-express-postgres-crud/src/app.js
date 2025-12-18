import express from "express";
import cors from "cors";
import Debug from "debug";
import helmet from "helmet";

import { noCache } from "./middlewares/cache.middlewares.js";
import { errorHandler } from "./middlewares/error.middlewares.js";
import { UsersRoutes } from "./routes/users.routes.js";

const debug = Debug("app:app");

export async function Application() {
  debug("create app instance");
  const app = express();

  debug("configure express");
  app.set("etag", false);
  app.set("trust proxy", 1);

  debug("load middlewares");
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(noCache);

  debug("load routes");
  app.use("/api/users", UsersRoutes());

  debug("load error-handler");
  app.use(errorHandler);

  return app;
}
