
import client from "../../../utils/axios-client";
import type { GetFriendProfilePictureResponse, GetFriendProfilePictureQueryParams } from "../../models/Profile/GetFriendProfilePicture";

      /**
* @link /api/services/app/Profile/GetFriendProfilePicture
*/
      export function getFriendProfilePicture <TData = GetFriendProfilePictureResponse>( params?: GetFriendProfilePictureQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetFriendProfilePicture`,
          params,
        });
      };
    