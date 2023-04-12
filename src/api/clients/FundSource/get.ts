
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/FundSource/Get";

      /**
* @link /api/services/app/FundSource/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/FundSource/Get`,
          params,
        });
      };
    