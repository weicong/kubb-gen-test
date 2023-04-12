
import client from "../../../utils/axios-client";
import type { CreateOrUpdateLanguageRequest, CreateOrUpdateLanguageResponse } from "../../models/Language/CreateOrUpdateLanguage";

      /**
* @link /api/services/app/Language/CreateOrUpdateLanguage
*/
      export function createOrUpdateLanguage <TData = CreateOrUpdateLanguageResponse, TVariables = CreateOrUpdateLanguageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Language/CreateOrUpdateLanguage`,
          data,
          
        });
      };
    