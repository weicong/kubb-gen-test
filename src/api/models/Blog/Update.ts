import type { UpdateBlogDto } from "../UpdateBlogDto";
import type { BlogDto } from "../BlogDto";

export type UpdateRequest = UpdateBlogDto;

/**
* @description Success
*/
export type UpdateResponse = BlogDto;
