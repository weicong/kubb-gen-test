
import client from "../../../utils/axios-client";
import type { ExportToWordRequest, ExportToWordResponse } from "../../models/ContractPay/ExportToWord";

      /**
* @link /api/services/app/ContractPay/ExportToWord
*/
      export function exportToWord <TData = ExportToWordResponse, TVariables = ExportToWordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/ContractPay/ExportToWord`,
          data,
          
        });
      };
    