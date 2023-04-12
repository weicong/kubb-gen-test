
import client from "../../../utils/axios-client";
import type { RenamePageRequest, RenamePageResponse } from "../../models/DashboardCustomization/RenamePage";

      /**
* @link /api/services/app/DashboardCustomization/RenamePage
*/
      export function renamePage <TData = RenamePageResponse, TVariables = RenamePageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DashboardCustomization/RenamePage`,
          data,
          
        });
      };
    