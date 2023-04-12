
import client from "../../../utils/axios-client";
import type { ExportToWordRequest, ExportToWordResponse } from "../../models/AssetChange/ExportToWord";

      /**
* @link /api/services/app/AssetChange/ExportToWord
*/
      export function exportToWord <TData = ExportToWordResponse, TVariables = ExportToWordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/AssetChange/ExportToWord`,
          data,
          
        });
      };
    