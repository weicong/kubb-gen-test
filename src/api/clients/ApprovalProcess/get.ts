
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/ApprovalProcess/Get";

      /**
* @link /api/services/app/ApprovalProcess/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ApprovalProcess/Get`,
          params,
        });
      };
    