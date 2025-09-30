import { checkHealthService, dummyService, userService } from "@src/services";
import { DummyController } from "./dummy.controller";
import { HealthController } from "./health.controller";
import { UserController } from "./user.controller";

export const dummyController = new DummyController(dummyService);
export const healthController = new HealthController(checkHealthService);
export const userController = new UserController(userService);
