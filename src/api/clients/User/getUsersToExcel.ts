
import client from "../../../utils/axios-client";
import type { GetUsersToExcelResponse, GetUsersToExcelQueryParams } from "../../models/User/GetUsersToExcel";

      /**
* @link /api/services/app/User/GetUsersToExcel
*/
      export function getUsersToExcel <TData = GetUsersToExcelResponse>( params?: GetUsersToExcelQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetUsersToExcel`,
          params,
        });
      };
    