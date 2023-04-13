import type { CreateUserDto } from "../CreateUserDto";
import type { UserDto } from "../UserDto";

export type CreateRequest = CreateUserDto;

/**
* @description Success
*/
export type CreateResponse = UserDto;
