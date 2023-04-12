
import client from "../../../utils/axios-client";
import type { GetCurrentUserProfileForEditResponse } from "../../models/Profile/GetCurrentUserProfileForEdit";

      /**
* @link /api/services/app/Profile/GetCurrentUserProfileForEdit
*/
      export function getCurrentUserProfileForEdit <TData = GetCurrentUserProfileForEditResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetCurrentUserProfileForEdit`,
          
        });
      };
    