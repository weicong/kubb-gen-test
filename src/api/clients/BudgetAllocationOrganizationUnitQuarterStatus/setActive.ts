
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/BudgetAllocationOrganizationUnitQuarterStatus/SetActive";

      /**
* @link /api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/SetActive`,
          data,
          
        });
      };
    