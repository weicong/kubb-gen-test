import type { InvoiceDto } from "../InvoiceDto";

export type GetInvoiceInfoQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetInvoiceInfoResponse = InvoiceDto;
