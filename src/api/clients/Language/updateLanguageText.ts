
import client from "../../../utils/axios-client";
import type { UpdateLanguageTextRequest, UpdateLanguageTextResponse } from "../../models/Language/UpdateLanguageText";

      /**
* @link /api/services/app/Language/UpdateLanguageText
*/
      export function updateLanguageText <TData = UpdateLanguageTextResponse, TVariables = UpdateLanguageTextRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Language/UpdateLanguageText`,
          data,
          
        });
      };
    