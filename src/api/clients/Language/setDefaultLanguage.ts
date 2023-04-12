
import client from "../../../utils/axios-client";
import type { SetDefaultLanguageRequest, SetDefaultLanguageResponse } from "../../models/Language/SetDefaultLanguage";

      /**
* @link /api/services/app/Language/SetDefaultLanguage
*/
      export function setDefaultLanguage <TData = SetDefaultLanguageResponse, TVariables = SetDefaultLanguageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Language/SetDefaultLanguage`,
          data,
          
        });
      };
    