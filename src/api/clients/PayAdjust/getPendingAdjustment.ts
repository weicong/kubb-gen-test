
import client from "../../../utils/axios-client";
import type { GetPendingAdjustmentResponse, GetPendingAdjustmentQueryParams } from "../../models/PayAdjust/GetPendingAdjustment";

      /**
* @link /api/services/app/PayAdjust/GetPendingAdjustment
*/
      export function getPendingAdjustment <TData = GetPendingAdjustmentResponse>( params?: GetPendingAdjustmentQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayAdjust/GetPendingAdjustment`,
          params,
        });
      };
    