
import client from "../../../utils/axios-client";
import type { AddNewPageRequest, AddNewPageResponse } from "../../models/DashboardCustomization/AddNewPage";

      /**
* @link /api/services/app/DashboardCustomization/AddNewPage
*/
      export function addNewPage <TData = AddNewPageResponse, TVariables = AddNewPageRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DashboardCustomization/AddNewPage`,
          data,
          
        });
      };
    