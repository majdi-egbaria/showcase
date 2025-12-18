import { User } from "../models/user.model.js";

/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

export function UsersCtrl() {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  async function getUsers(req, res) {
    const users = await User.getUsers();
    res.status(200).json(users);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  async function getUser(req, res) {
    const id = req.params.id;
    const user = await User.getUser(id);
    if (!user) {
      res.status(404);
      throw new Error("User not found!");
    }
    res.status(200).json(user);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  async function createUser(req, res) {
    const { name, email } = req.body;
    const createdUser = await User.createUser(name, email);
    res.status(201).json(createdUser);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  async function updateUser(req, res) {
    const id = req.params.id;
    const { name, email } = req.body;
    const updatedUser = await User.updateUser(id, name, email);
    if (!updatedUser) {
      res.status(404);
      throw new Error("User not found!");
    }
    res.status(200).json(updatedUser);
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  async function deleteUser(req, res) {
    const id = req.params.id;
    const deletedUser = await User.deleteUser(id);
    if (!deletedUser) {
      res.status(404);
      throw new Error("User not found!");
    }
    res.status(200).json(deletedUser);
  }

  return { getUsers, getUser, createUser, updateUser, deleteUser };
}
