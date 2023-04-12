
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/WebhookEvent/Get";

      /**
* @link /api/services/app/WebhookEvent/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookEvent/Get`,
          params,
        });
      };
    