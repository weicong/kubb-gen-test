
import client from "../../../utils/axios-client";
import type { GetGroupedListResponse, GetGroupedListQueryParams } from "../../models/PurchasePackageItem/GetGroupedList";

      /**
* @summary 按支出科目/项目分组
* @link /api/services/app/PurchasePackageItem/GetGroupedList
*/
      export function getGroupedList <TData = GetGroupedListResponse>( params?: GetGroupedListQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PurchasePackageItem/GetGroupedList`,
          params,
        });
      };
    