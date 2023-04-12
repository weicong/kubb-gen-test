
import client from "../../../utils/axios-client";
import type { GetProfilePictureByUserNameResponse, GetProfilePictureByUserNameQueryParams } from "../../models/Profile/GetProfilePictureByUserName";

      /**
* @link /api/services/app/Profile/GetProfilePictureByUserName
*/
      export function getProfilePictureByUserName <TData = GetProfilePictureByUserNameResponse>( params?: GetProfilePictureByUserNameQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetProfilePictureByUserName`,
          params,
        });
      };
    