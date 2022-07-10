import * as status from '../Constants/Status.mjs'
import { validationResult } from "express-validator"
import admin from "../Models/admin.mjs";
import aadhar from "../Models/aadhar.mjs";

export const login = async (req,res)=>{
  // Storing errors in input data inside errors
  const errors = validationResult(req);

  if(!errors.isEmpty()){
      //Email address already associated with another ID. 
      return res.status(status.BADREQUEST).send({errors});
  }

  const response = await admin.findOne({
      userId: req.body.userId,
  });

  if(response === null)
      return res.status(status.BADREQUEST).json({"Message":"Invalid Credentials"});

  if(req.body.password === response.password){
      return res.status(status.OK).json({"success":"success"});

  }else{
      return res.status(status.NOTFOUND).json({Message: "Invalid Credentials",status:'fail'});
  }
}

export const addAadhar = async (req,res)=>{
    // Storing errors in input data inside errors
    const errors = validationResult(req);
  
    if(!errors.isEmpty()){
        //Email address already associated with another ID. 
        return res.status(status.BADREQUEST).send({errors});
    }
    const response = await aadhar.create({
        aadharNumber: "1234567890",
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        homeAddress: req.body.homeAddress
    })
  
    if(response === null)
        return res.status(status.BADREQUEST).json({"Message":"Invalid Credentials"});
  
    if(req.body.password === response.password){
        return res.status(status.OK).json({"success":"success"});
  
    }else{
        return res.status(status.NOTFOUND).json({Message: "Invalid Credentials",status:'fail'});
    }
  }