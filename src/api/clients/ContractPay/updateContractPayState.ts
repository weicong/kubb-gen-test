
import client from "../../../utils/axios-client";
import type { UpdateContractPayStateRequest, UpdateContractPayStateResponse } from "../../models/ContractPay/UpdateContractPayState";

      /**
* @summary 更新合同支付状态
* @link /api/services/app/ContractPay/UpdateContractPayState
*/
      export function updateContractPayState <TData = UpdateContractPayStateResponse, TVariables = UpdateContractPayStateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/ContractPay/UpdateContractPayState`,
          data,
          
        });
      };
    