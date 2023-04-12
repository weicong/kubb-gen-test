
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/ContractPay/SetActive";

      /**
* @link /api/services/app/ContractPay/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/ContractPay/SetActive`,
          data,
          
        });
      };
    