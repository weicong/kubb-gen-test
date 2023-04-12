import type { CreatePostDto } from "../CreatePostDto";
import type { PostDto } from "../PostDto";

export type CreateRequest = CreatePostDto;

/**
* @description Success
*/
export type CreateResponse = PostDto;
