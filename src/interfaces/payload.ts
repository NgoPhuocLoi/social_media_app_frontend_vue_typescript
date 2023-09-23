import type { User } from "./model";

export type RegisterUserPayload = Pick<User, "name" | "email" | "password">;
export type LoginUserPayload = Pick<User, "email" | "password">;
