import express from "express";
import { userRouter } from "./routes/userRoutes";

const app = express();
const PORT = 3000;

app.use("/user" , userRouter);

app.listen(PORT , ()=>{
  console.log(`http://localhost:${PORT}`);
})