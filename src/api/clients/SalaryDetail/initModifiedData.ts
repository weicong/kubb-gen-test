
import client from "../../../utils/axios-client";
import type { InitModifiedDataRequest, InitModifiedDataResponse } from "../../models/SalaryDetail/InitModifiedData";

      /**
* @link /api/services/app/SalaryDetail/InitModifiedData
*/
      export function initModifiedData <TData = InitModifiedDataResponse, TVariables = InitModifiedDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/SalaryDetail/InitModifiedData`,
          data,
          
        });
      };
    