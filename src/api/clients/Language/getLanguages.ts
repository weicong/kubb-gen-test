
import client from "../../../utils/axios-client";
import type { GetLanguagesResponse } from "../../models/Language/GetLanguages";

      /**
* @link /api/services/app/Language/GetLanguages
*/
      export function getLanguages <TData = GetLanguagesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Language/GetLanguages`,
          
        });
      };
    