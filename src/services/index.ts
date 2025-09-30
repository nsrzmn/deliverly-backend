import { DummyService } from "./dummy.service";
import { CheckHealthService } from "./health.service";
import { UserService } from "./user.service";

const dummyService: DummyService = new DummyService()
const checkHealthService: CheckHealthService = new CheckHealthService()
const userService: UserService = new UserService()

export {
    dummyService,
    checkHealthService,
    userService
}