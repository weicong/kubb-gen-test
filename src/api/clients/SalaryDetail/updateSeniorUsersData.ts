
import client from "../../../utils/axios-client";
import type { UpdateSeniorUsersDataRequest, UpdateSeniorUsersDataResponse } from "../../models/SalaryDetail/UpdateSeniorUsersData";

      /**
* @link /api/services/app/SalaryDetail/UpdateSeniorUsersData
*/
      export function updateSeniorUsersData <TData = UpdateSeniorUsersDataResponse, TVariables = UpdateSeniorUsersDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/SalaryDetail/UpdateSeniorUsersData`,
          data,
          
        });
      };
    