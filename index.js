const express = require('express')
const db = require('./db.js');
const admin = require("./Controller/admin.js");
const user = require("./Controller/user.js");

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000
db.connectToMongoose();

app.use('/admin', admin.adminRouter);

app.use('/user', user.userRouter);

app.listen( port, () => {
  console.log(`Task listening at http://localhost:${port}`)
})