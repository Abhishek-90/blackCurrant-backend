const express = require("express");
const serverless = require("serverless-http");
const db = require('../db.mjs');
const admin = require('../Controller/admin.mjs');
const user = require('../Controller/user.mjs');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000
db.connectToMongoose();

app.use('/.netlify/functions/api/admin', admin.adminRouter);

app.use('/.netlify/functions/api/user', user.userRouter);

app.listen( port, () => {
  console.log(`Task listening at http://localhost:${port}`)
})

module.exports = app;
module.exports.handler = serverless(app);
