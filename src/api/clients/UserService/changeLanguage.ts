
import client from "../../../utils/axios-client";
import type { ChangeLanguageRequest, ChangeLanguageResponse } from "../../models/UserModels/ChangeLanguage";

      /**
* @link /api/services/app/User/ChangeLanguage
*/
      export function changeLanguage <TData = ChangeLanguageResponse, TVariables = ChangeLanguageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/ChangeLanguage`,
          data,
          
        });
      };
    