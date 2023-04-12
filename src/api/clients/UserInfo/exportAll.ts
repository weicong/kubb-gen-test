
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/UserInfo/ExportAll";

      /**
* @summary 导出人员参数信息
* @link /api/services/app/UserInfo/ExportAll
*/
      export function exportAll <TData = ExportAllResponse, TVariables = ExportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserInfo/ExportAll`,
          data,
          
        });
      };
    