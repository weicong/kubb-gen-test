
import client from "../../../utils/axios-client";
import type { GetUserForEditResponse, GetUserForEditQueryParams } from "../../models/User/GetUserForEdit";

      /**
* @link /api/services/app/User/GetUserForEdit
*/
      export function getUserForEdit <TData = GetUserForEditResponse>( params?: GetUserForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetUserForEdit`,
          params,
        });
      };
    