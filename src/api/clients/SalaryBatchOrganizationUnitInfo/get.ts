
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/SalaryBatchOrganizationUnitInfo/Get";

      /**
* @link /api/services/app/SalaryBatchOrganizationUnitInfo/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryBatchOrganizationUnitInfo/Get`,
          params,
        });
      };
    