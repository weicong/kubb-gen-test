
import client from "../../../utils/axios-client";
import type { GetEditionResponse, GetEditionQueryParams } from "../../models/TenantRegistration/GetEdition";

      /**
* @link /api/services/app/TenantRegistration/GetEdition
*/
      export function getEdition <TData = GetEditionResponse>( params?: GetEditionQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantRegistration/GetEdition`,
          params,
        });
      };
    