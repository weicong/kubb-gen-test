
import client from "../../../utils/axios-client";
import type { DeleteLanguageRequest, DeleteLanguageResponse, DeleteLanguageQueryParams } from "../../models/Language/DeleteLanguage";

      /**
* @link /api/services/app/Language/DeleteLanguage
*/
      export function deleteLanguage <TData = DeleteLanguageResponse, TVariables = DeleteLanguageRequest>( data: TVariables, params?: DeleteLanguageQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Language/DeleteLanguage`,
          data,
          params,
        });
      };
    