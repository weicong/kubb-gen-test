
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/OrganizationUnitInfo/ExportAll";

      /**
* @summary 导出科室参数信息
* @link /api/services/app/OrganizationUnitInfo/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnitInfo/ExportAll`,
          data,
          
        });
      };
    