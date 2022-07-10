import express from "express";
import { connectToMongoose } from './db.js';
import { adminRouter } from "./Controller/admin.js";
import { userRouter } from "./Controller/user.js";

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000
connectToMongoose();

app.use('/admin', adminRouter);

app.use('/user', userRouter);

app.listen( port, () => {
  console.log(`Task listening at http://localhost:${port}`)
})