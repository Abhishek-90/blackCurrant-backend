import express from "express";
import { body } from "express-validator";
import * as service from "./services.mjs"

const adminRouter = express.Router();

//ROUTE 1: API Endpoint for existing users to login. No Login Required.
adminRouter.post("/login", service.login);

adminRouter.post(
  "/addAddhar",
  [
    body("email").isEmail().withMessage("Enter Valid Email Address."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Minimum 8 characters Password"),
  ],
  service.addAadhar
);

export { adminRouter };
