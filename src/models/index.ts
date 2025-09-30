import { dummy } from ".";
import { User } from "./user";

type ModelType = any;

export * from "./dummy";
export * from "./user";

export const models: ModelType = [dummy, User];
