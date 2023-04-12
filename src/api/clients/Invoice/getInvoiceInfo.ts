
import client from "../../../utils/axios-client";
import type { GetInvoiceInfoResponse, GetInvoiceInfoQueryParams } from "../../models/Invoice/GetInvoiceInfo";

      /**
* @link /api/services/app/Invoice/GetInvoiceInfo
*/
      export function getInvoiceInfo <TData = GetInvoiceInfoResponse>( params?: GetInvoiceInfoQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Invoice/GetInvoiceInfo`,
          params,
        });
      };
    