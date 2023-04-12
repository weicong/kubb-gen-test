
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/ContractType/Get";

      /**
* @link /api/services/app/ContractType/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ContractType/Get`,
          params,
        });
      };
    