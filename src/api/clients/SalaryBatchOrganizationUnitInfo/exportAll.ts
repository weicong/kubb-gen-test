
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/SalaryBatchOrganizationUnitInfo/ExportAll";

      /**
* @link /api/services/app/SalaryBatchOrganizationUnitInfo/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/SalaryBatchOrganizationUnitInfo/ExportAll`,
          data,
          
        });
      };
    