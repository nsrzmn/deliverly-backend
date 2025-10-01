import { setupController } from "@src/controllers";
import { Router, Request, Response } from "express";

export const setupRouter: Router = Router();

setupRouter.post("/seed-user", (...args: [Request, Response]) =>
  setupController.User(...args)
);

setupRouter.get("/streets/:userId", (...args: [Request, Response]) =>
  setupController.streetsByUser(...args)
);