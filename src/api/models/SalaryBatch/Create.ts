import type { CreateSalaryBatchDto } from "../CreateSalaryBatchDto";
import type { SalaryBatchDto } from "../SalaryBatchDto";

export type CreateRequest = CreateSalaryBatchDto;

/**
* @description Success
*/
export type CreateResponse = SalaryBatchDto;
