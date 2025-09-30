import { dummy } from ".";
import { Street } from "./street";
import { User } from "./user";

type ModelType = any;

export * from "./dummy";
export * from "./user";

export const models: ModelType = [dummy, User, Street];
