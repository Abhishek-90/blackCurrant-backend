const status = require("../Constants/Status.js");
const validator = require("express-validator");
const admin = require("../Models/admin.js");
const aadhar = require("../Models/aadhar.js");

const login = async (req, res) => {
  // Storing errors in input data inside errors
  const errors = validator.validationResult(req);

  if (!errors.isEmpty()) {
    //Email address already associated with another ID.
    return res.status(status.BADREQUEST).send({ errors });
  }

  const response = await admin.admin.findOne({
    userId: req.body.userId,
  });

  if (response === null)
    return res
      .status(status.BADREQUEST)
      .json({ Message: "Invalid Credentials" });

  if (req.body.password === response.password) {
    return res.status(status.OK).json({ success: "success" });
  } else {
    return res
      .status(status.NOTFOUND)
      .json({ Message: "Invalid Credentials", status: "fail" });
  }
};

const addAadhar = async (req, res) => {
  // Storing errors in input data inside errors
  const errors = validator.validationResult(req);

  if (!errors.isEmpty()) {
    //Email address already associated with another ID.
    return res.status(status.BADREQUEST).send({ errors });
  }

  console.log(aadhar);
  const response = await aadhar.aadhar.create({
    aadharNumber: generateAadharNumber(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    homeAddress: req.body.homeAddress,
  });

  if (response === null)
    return res
      .status(status.BADREQUEST)
      .json({ Message: "Invalid Credentials" });

  if (req.body.password === response.password) {
    return res.status(status.OK).json({ success: "success" });
  } else {
    return res
      .status(status.NOTFOUND)
      .json({ Message: "Invalid Credentials", status: "fail" });
  }
};

const generateAadharNumber = () => {
  const characters ='0123456789';

    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    return result;
}
}

module.exports = { login, addAadhar };
