
import client from "../../../utils/axios-client";
import type { CreateInvoiceRequest, CreateInvoiceResponse } from "../../models/Invoice/CreateInvoice";

      /**
* @link /api/services/app/Invoice/CreateInvoice
*/
      export function createInvoice <TData = CreateInvoiceResponse, TVariables = CreateInvoiceRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Invoice/CreateInvoice`,
          data,
          
        });
      };
    