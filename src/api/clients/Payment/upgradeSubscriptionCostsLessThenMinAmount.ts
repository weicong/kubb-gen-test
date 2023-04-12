
import client from "../../../utils/axios-client";
import type { UpgradeSubscriptionCostsLessThenMinAmountRequest, UpgradeSubscriptionCostsLessThenMinAmountResponse, UpgradeSubscriptionCostsLessThenMinAmountQueryParams } from "../../models/Payment/UpgradeSubscriptionCostsLessThenMinAmount";

      /**
* @link /api/services/app/Payment/UpgradeSubscriptionCostsLessThenMinAmount
*/
      export function upgradeSubscriptionCostsLessThenMinAmount <TData = UpgradeSubscriptionCostsLessThenMinAmountResponse, TVariables = UpgradeSubscriptionCostsLessThenMinAmountRequest>( data: TVariables, params?: UpgradeSubscriptionCostsLessThenMinAmountQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/UpgradeSubscriptionCostsLessThenMinAmount`,
          data,
          params,
        });
      };
    