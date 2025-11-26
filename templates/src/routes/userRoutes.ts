import Router from "express";
import { hello } from "../controllers/userController";

export const userRouter = Router();

userRouter.get("/" , hello)