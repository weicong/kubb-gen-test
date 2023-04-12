
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/ExpenditureClassification/Get";

      /**
* @link /api/services/app/ExpenditureClassification/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ExpenditureClassification/Get`,
          params,
        });
      };
    