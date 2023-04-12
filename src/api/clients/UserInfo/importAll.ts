
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/UserInfo/ImportAll";

      /**
* @summary 导入人员参数信息
* @link /api/services/app/UserInfo/ImportAll
*/
      export function importAll <TData = ImportAllResponse, TVariables = ImportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserInfo/ImportAll`,
          data,
          
        });
      };
    