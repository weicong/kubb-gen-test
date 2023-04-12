
import client from "../../../utils/axios-client";
import type { GetEditionForEditResponse, GetEditionForEditQueryParams } from "../../models/Edition/GetEditionForEdit";

      /**
* @link /api/services/app/Edition/GetEditionForEdit
*/
      export function getEditionForEdit <TData = GetEditionForEditResponse>( params?: GetEditionForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Edition/GetEditionForEdit`,
          params,
        });
      };
    