import { Router } from "express";
import { dummyRouter } from "./dummy.routes";
import { healthRouter } from "./health.routes";
import { setupRouter } from "./setup.routes";

export const routes: Router = Router();

routes.use("/", dummyRouter);
routes.use("/", healthRouter);
routes.use("/", setupRouter);
