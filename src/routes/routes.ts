import { Router } from "express";
import { dummyRouter } from "./dummy.routes";
import { healthRouter } from "./health.routes";
import { userRouter } from "./user.routes";

export const routes: Router = Router();

routes.use("/", dummyRouter);
routes.use("/", healthRouter);
routes.use("/", userRouter);
