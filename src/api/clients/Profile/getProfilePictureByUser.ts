
import client from "../../../utils/axios-client";
import type { GetProfilePictureByUserResponse, GetProfilePictureByUserQueryParams } from "../../models/Profile/GetProfilePictureByUser";

      /**
* @link /api/services/app/Profile/GetProfilePictureByUser
*/
      export function getProfilePictureByUser <TData = GetProfilePictureByUserResponse>( params?: GetProfilePictureByUserQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetProfilePictureByUser`,
          params,
        });
      };
    