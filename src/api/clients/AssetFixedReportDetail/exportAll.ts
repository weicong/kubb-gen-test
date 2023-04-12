
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/AssetFixedReportDetail/ExportAll";

      /**
* @summary 导出全部
* @link /api/services/app/AssetFixedReportDetail/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/AssetFixedReportDetail/ExportAll`,
          data,
          
        });
      };
    