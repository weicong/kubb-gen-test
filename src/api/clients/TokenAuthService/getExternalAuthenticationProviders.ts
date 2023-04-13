
import client from "../../../utils/axios-client";
import type { GetExternalAuthenticationProvidersResponse } from "../../models/TokenAuthModels/GetExternalAuthenticationProviders";

      /**
* @link /api/TokenAuth/GetExternalAuthenticationProviders
*/
      export function getExternalAuthenticationProviders <TData = GetExternalAuthenticationProvidersResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/TokenAuth/GetExternalAuthenticationProviders`,
          
        });
      };
    