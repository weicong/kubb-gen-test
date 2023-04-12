
import client from "../../../utils/axios-client";
import type { ChangeLanguageRequest, ChangeLanguageResponse } from "../../models/Profile/ChangeLanguage";

      /**
* @link /api/services/app/Profile/ChangeLanguage
*/
      export function changeLanguage <TData = ChangeLanguageResponse, TVariables = ChangeLanguageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/ChangeLanguage`,
          data,
          
        });
      };
    