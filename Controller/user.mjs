import express from "express";
import { body } from "express-validator";
import * as status from '../Constants/Status.mjs'
import aadhar from "../Models/aadhar.mjs"
import { validationResult } from "express-validator"
;

const userRouter = express.Router();

//ROUTE 1: API Endpoint for existing users to login. No Login Required.
userRouter.post("/login", [
  body("email").isEmail().withMessage("Enter Valid Email Address.")
], async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
      //Email address already associated with another ID. 
      return res.status(status.BADREQUEST).send({errors});
  }

  const response = await aadhar.findOne({
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


export { userRouter };
