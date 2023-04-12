
import client from "../../../utils/axios-client";
import type { GetLanguageTextsResponse, GetLanguageTextsQueryParams } from "../../models/Language/GetLanguageTexts";

      /**
* @link /api/services/app/Language/GetLanguageTexts
*/
      export function getLanguageTexts <TData = GetLanguageTextsResponse>( params?: GetLanguageTextsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Language/GetLanguageTexts`,
          params,
        });
      };
    