import type { CreateBlogDto } from "../CreateBlogDto";
import type { BlogDto } from "../BlogDto";

export type CreateRequest = CreateBlogDto;

/**
* @description Success
*/
export type CreateResponse = BlogDto;
