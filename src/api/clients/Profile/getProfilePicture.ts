
import client from "../../../utils/axios-client";
import type { GetProfilePictureResponse } from "../../models/Profile/GetProfilePicture";

      /**
* @link /api/services/app/Profile/GetProfilePicture
*/
      export function getProfilePicture <TData = GetProfilePictureResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetProfilePicture`,
          
        });
      };
    