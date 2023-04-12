
import client from "../../../utils/axios-client";
import type { UpdateContractFinalMoneyRequest, UpdateContractFinalMoneyResponse } from "../../models/Contract/UpdateContractFinalMoney";

      /**
* @summary 更新备案信息
* @link /api/services/app/Contract/UpdateContractFinalMoney
*/
      export function updateContractFinalMoney <TData = UpdateContractFinalMoneyResponse, TVariables = UpdateContractFinalMoneyRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Contract/UpdateContractFinalMoney`,
          data,
          
        });
      };
    