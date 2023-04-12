
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/EntityPropertyValue/ExportAll";

      /**
* @summary 导出到 Excel 文件，导出记录对名为 TEntityDto。
* @link /api/services/app/EntityPropertyValue/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/EntityPropertyValue/ExportAll`,
          data,
          
        });
      };
    