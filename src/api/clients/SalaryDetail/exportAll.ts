
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/SalaryDetail/ExportAll";

      /**
* @link /api/services/app/SalaryDetail/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/SalaryDetail/ExportAll`,
          data,
          
        });
      };
    