
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetFundItem/Get";

      /**
* @link /api/services/app/BudgetFundItem/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetFundItem/Get`,
          params,
        });
      };
    