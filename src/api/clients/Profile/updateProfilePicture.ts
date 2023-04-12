
import client from "../../../utils/axios-client";
import type { UpdateProfilePictureRequest, UpdateProfilePictureResponse } from "../../models/Profile/UpdateProfilePicture";

      /**
* @link /api/services/app/Profile/UpdateProfilePicture
*/
      export function updateProfilePicture <TData = UpdateProfilePictureResponse, TVariables = UpdateProfilePictureRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Profile/UpdateProfilePicture`,
          data,
          
        });
      };
    