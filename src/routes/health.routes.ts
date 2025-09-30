import { healthController } from "@src/controllers";
import { Router, Request, Response } from "express";

export const healthRouter: Router = Router();

healthRouter.get("/health", (...args: [Request, Response]) =>
  healthController.checkHealth(...args)
);
