const express = require('express');
const validator = require("express-validator");
const service =  require("./services.js");
const adminRouter = express.Router();

//ROUTE 1: API Endpoint for existing users to login. No Login Required.
adminRouter.post("/login", service.login);

adminRouter.post(
  "/addAddhar",
  [
    
    validator.body("email").isEmail().withMessage("Enter Valid Email Address."),
    validator.body("password")
      .isLength({ min: 8 })
      .withMessage("Minimum 8 characters Password"),
  ],
  service.addAadhar
);

module.exports = { adminRouter };