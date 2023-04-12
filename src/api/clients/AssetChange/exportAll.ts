
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/AssetChange/ExportAll";

      /**
* @summary 导出到 Excel 文件，导出记录对名为 TEntityDto。
* @link /api/services/app/AssetChange/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/AssetChange/ExportAll`,
          data,
          
        });
      };
    