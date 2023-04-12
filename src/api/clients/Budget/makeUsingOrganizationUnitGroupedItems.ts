
import client from "../../../utils/axios-client";
import type { MakeUsingOrganizationUnitGroupedItemsRequest, MakeUsingOrganizationUnitGroupedItemsResponse } from "../../models/Budget/MakeUsingOrganizationUnitGroupedItems";

      /**
* @summary “支出”预算项按支出科目、使用科室汇总
* @link /api/services/app/Budget/MakeUsingOrganizationUnitGroupedItems
*/
      export function makeUsingOrganizationUnitGroupedItems <TData = MakeUsingOrganizationUnitGroupedItemsResponse, TVariables = MakeUsingOrganizationUnitGroupedItemsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Budget/MakeUsingOrganizationUnitGroupedItems`,
          data,
          
        });
      };
    