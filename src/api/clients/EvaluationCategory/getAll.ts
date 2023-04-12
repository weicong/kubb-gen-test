
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/EvaluationCategory/GetAll";

      /**
* @link /api/services/app/EvaluationCategory/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EvaluationCategory/GetAll`,
          params,
        });
      };
    