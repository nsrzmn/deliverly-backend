import { userController } from "@src/controllers";
import { Router, Request, Response } from "express";

export const userRouter: Router = Router();

userRouter.post("/seed-user", (...args: [Request, Response]) =>
  userController.User(...args)
);
