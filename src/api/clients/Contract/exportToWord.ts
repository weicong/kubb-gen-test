
import client from "../../../utils/axios-client";
import type { ExportToWordRequest, ExportToWordResponse } from "../../models/Contract/ExportToWord";

      /**
* @link /api/services/app/Contract/ExportToWord
*/
      export function exportToWord <TData = ExportToWordResponse, TVariables = ExportToWordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Contract/ExportToWord`,
          data,
          
        });
      };
    