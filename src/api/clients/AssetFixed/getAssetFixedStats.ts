
import client from "../../../utils/axios-client";
import type { GetAssetFixedStatsResponse, GetAssetFixedStatsQueryParams } from "../../models/AssetFixed/GetAssetFixedStats";

      /**
* @summary 统计
* @link /api/services/app/AssetFixed/GetAssetFixedStats
*/
      export function getAssetFixedStats <TData = GetAssetFixedStatsResponse>( params?: GetAssetFixedStatsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixed/GetAssetFixedStats`,
          params,
        });
      };
    