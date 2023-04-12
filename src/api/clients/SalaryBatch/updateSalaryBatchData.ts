
import client from "../../../utils/axios-client";
import type { UpdateSalaryBatchDataRequest, UpdateSalaryBatchDataResponse } from "../../models/SalaryBatch/UpdateSalaryBatchData";

      /**
* @link /api/services/app/SalaryBatch/UpdateSalaryBatchData
*/
      export function updateSalaryBatchData <TData = UpdateSalaryBatchDataResponse, TVariables = UpdateSalaryBatchDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/SalaryBatch/UpdateSalaryBatchData`,
          data,
          
        });
      };
    