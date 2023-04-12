
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/ProjectStage/Get";

      /**
* @link /api/services/app/ProjectStage/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ProjectStage/Get`,
          params,
        });
      };
    