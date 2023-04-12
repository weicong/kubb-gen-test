import type { GetAllSalaryDetailsInput } from "../GetAllSalaryDetailsInput";
import type { FileDto } from "../FileDto";

export type ExportAllRequest = GetAllSalaryDetailsInput;

/**
* @description Success
*/
export type ExportAllResponse = FileDto;
