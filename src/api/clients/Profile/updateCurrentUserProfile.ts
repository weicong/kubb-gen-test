
import client from "../../../utils/axios-client";
import type { UpdateCurrentUserProfileRequest, UpdateCurrentUserProfileResponse } from "../../models/Profile/UpdateCurrentUserProfile";

      /**
* @link /api/services/app/Profile/UpdateCurrentUserProfile
*/
      export function updateCurrentUserProfile <TData = UpdateCurrentUserProfileResponse, TVariables = UpdateCurrentUserProfileRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Profile/UpdateCurrentUserProfile`,
          data,
          
        });
      };
    