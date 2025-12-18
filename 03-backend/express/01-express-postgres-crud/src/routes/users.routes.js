import express from "express";

import { UsersCtrl } from "../controllers/users.ctrl.js";
import { validateUser } from "../middlewares/validation.middlewares.js";

export function UsersRoutes() {
  const usersCtrl = UsersCtrl();

  const router = express.Router();

  router.get("/", usersCtrl.getUsers);
  router.get("/:id", usersCtrl.getUser);
  router.post("/", [validateUser], usersCtrl.createUser);
  router.put("/:id", [validateUser], usersCtrl.updateUser);
  router.delete("/:id", usersCtrl.deleteUser);

  return router;
}
