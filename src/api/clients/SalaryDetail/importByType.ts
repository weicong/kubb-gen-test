
import client from "../../../utils/axios-client";
import type { ImportByTypeRequest, ImportByTypeResponse } from "../../models/SalaryDetail/ImportByType";

      /**
* @summary 导入
* @link /api/services/app/SalaryDetail/ImportByType
*/
      export function importByType <TData = ImportByTypeResponse, TVariables = ImportByTypeRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/SalaryDetail/ImportByType`,
          data,
          
        });
      };
    