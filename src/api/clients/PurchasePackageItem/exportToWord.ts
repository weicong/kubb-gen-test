
import client from "../../../utils/axios-client";
import type { ExportToWordRequest, ExportToWordResponse } from "../../models/PurchasePackageItem/ExportToWord";

      /**
* @link /api/services/app/PurchasePackageItem/ExportToWord
*/
      export function exportToWord <TData = ExportToWordResponse, TVariables = ExportToWordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PurchasePackageItem/ExportToWord`,
          data,
          
        });
      };
    