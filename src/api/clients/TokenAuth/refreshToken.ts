
import client from "../../../utils/axios-client";
import type { RefreshTokenRequest, RefreshTokenResponse, RefreshTokenQueryParams } from "../../models/TokenAuth/RefreshToken";

      /**
* @link /api/TokenAuth/RefreshToken
*/
      export function refreshToken <TData = RefreshTokenResponse, TVariables = RefreshTokenRequest>( data: TVariables, params?: RefreshTokenQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/RefreshToken`,
          data,
          params,
        });
      };
    