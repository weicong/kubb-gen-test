
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/OrganizationUnitInfo/ImportAll";

      /**
* @summary 导入科室参数信息
* @link /api/services/app/OrganizationUnitInfo/ImportAll
*/
      export function importAll <TData = ImportAllResponse, TVariables = ImportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnitInfo/ImportAll`,
          data,
          
        });
      };
    