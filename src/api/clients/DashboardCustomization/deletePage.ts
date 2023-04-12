
import client from "../../../utils/axios-client";
import type { DeletePageRequest, DeletePageResponse, DeletePageQueryParams } from "../../models/DashboardCustomization/DeletePage";

      /**
* @link /api/services/app/DashboardCustomization/DeletePage
*/
      export function deletePage <TData = DeletePageResponse, TVariables = DeletePageRequest>( data: TVariables, params?: DeletePageQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/DashboardCustomization/DeletePage`,
          data,
          params,
        });
      };
    