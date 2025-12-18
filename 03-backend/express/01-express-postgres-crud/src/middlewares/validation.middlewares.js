import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  email: Joi.string().email().required(),
});

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function validateUser(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }
  next();
}
