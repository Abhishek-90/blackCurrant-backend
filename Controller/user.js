const express = require('express');
const validator = require("express-validator");
const status = require('../Constants/Status.js');
const aadhar = require("../Models/aadhar.js");

const userRouter = express.Router();

//ROUTE 1: API Endpoint for existing users to login. No Login Required.
userRouter.post("/login", [
    validator.body("email").isEmail().withMessage("Enter Valid Email Address.")
], async (req, res) => {
  const errors = validator.validationResult(req);

  if(!errors.isEmpty()){
      //Email address already associated with another ID. 
      return res.status(status.BADREQUEST).send({errors});
  }

  const response = await aadhar.aadhar.findOne({
      email: req.body.email,
  });

  if(response === null)
      return res.status(status.BADREQUEST).json({"Message":"Invalid Credentials"});

  if(req.body.password === response.password){
      return res.status(status.OK).json({"success":"success", "aadharNumber": response.aadharNumber});

  }else{
      return res.status(status.NOTFOUND).json({Message: "Invalid Credentials",status:'fail'});
  }
});


module.exports = { userRouter };
