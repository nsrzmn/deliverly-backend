import { checkHealthService, dummyService, setupService } from "@src/services";
import { DummyController } from "./dummy.controller";
import { HealthController } from "./health.controller";
import { SetupController } from "./setup.controller";

export const dummyController = new DummyController(dummyService);
export const healthController = new HealthController(checkHealthService);
export const setupController = new SetupController(setupService);
