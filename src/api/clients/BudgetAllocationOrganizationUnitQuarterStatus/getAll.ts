
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/BudgetAllocationOrganizationUnitQuarterStatus/GetAll";

      /**
* @link /api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/GetAll`,
          params,
        });
      };
    