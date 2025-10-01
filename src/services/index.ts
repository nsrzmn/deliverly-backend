import { DummyService } from "./dummy.service";
import { CheckHealthService } from "./health.service";
import { SetupService } from "./setup.service";

const dummyService: DummyService = new DummyService()
const checkHealthService: CheckHealthService = new CheckHealthService()
const setupService: SetupService = new SetupService()

export {
    dummyService,
    checkHealthService,
    setupService
}