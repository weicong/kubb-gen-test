
import client from "../../../utils/axios-client";
import type { UpdateContractFinalSaveRequest, UpdateContractFinalSaveResponse } from "../../models/Contract/UpdateContractFinalSave";

      /**
* @summary 更新合同备案状态
* @link /api/services/app/Contract/UpdateContractFinalSave
*/
      export function updateContractFinalSave <TData = UpdateContractFinalSaveResponse, TVariables = UpdateContractFinalSaveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Contract/UpdateContractFinalSave`,
          data,
          
        });
      };
    