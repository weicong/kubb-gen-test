import type { CreatePayBillInput } from "../CreatePayBillInput";
import type { PayBillDto } from "../PayBillDto";

export type CreateRequest = CreatePayBillInput;

/**
* @description Success
*/
export type CreateResponse = PayBillDto;
