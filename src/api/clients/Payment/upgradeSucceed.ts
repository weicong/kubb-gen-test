
import client from "../../../utils/axios-client";
import type { UpgradeSucceedRequest, UpgradeSucceedResponse, UpgradeSucceedQueryParams } from "../../models/Payment/UpgradeSucceed";

      /**
* @link /api/services/app/Payment/UpgradeSucceed
*/
      export function upgradeSucceed <TData = UpgradeSucceedResponse, TVariables = UpgradeSucceedRequest>( data: TVariables, params?: UpgradeSucceedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/UpgradeSucceed`,
          data,
          params,
        });
      };
    