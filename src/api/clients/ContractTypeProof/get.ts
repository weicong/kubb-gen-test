
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/ContractTypeProof/Get";

      /**
* @link /api/services/app/ContractTypeProof/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ContractTypeProof/Get`,
          params,
        });
      };
    