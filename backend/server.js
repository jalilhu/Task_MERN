const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require('./connect/database')
const taskRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");

const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/task", taskRouter);
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`server is runing on port: ${PORT}`);
});
