
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/SalaryBatchOrganizationUnitInfo/GetAll";

      /**
* @link /api/services/app/SalaryBatchOrganizationUnitInfo/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryBatchOrganizationUnitInfo/GetAll`,
          params,
        });
      };
    