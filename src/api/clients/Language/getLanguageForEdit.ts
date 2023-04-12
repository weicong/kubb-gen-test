
import client from "../../../utils/axios-client";
import type { GetLanguageForEditResponse, GetLanguageForEditQueryParams } from "../../models/Language/GetLanguageForEdit";

      /**
* @link /api/services/app/Language/GetLanguageForEdit
*/
      export function getLanguageForEdit <TData = GetLanguageForEditResponse>( params?: GetLanguageForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Language/GetLanguageForEdit`,
          params,
        });
      };
    