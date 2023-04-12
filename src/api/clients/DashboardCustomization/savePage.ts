
import client from "../../../utils/axios-client";
import type { SavePageRequest, SavePageResponse } from "../../models/DashboardCustomization/SavePage";

      /**
* @link /api/services/app/DashboardCustomization/SavePage
*/
      export function savePage <TData = SavePageResponse, TVariables = SavePageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DashboardCustomization/SavePage`,
          data,
          
        });
      };
    