
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateSalaryBatchDataRequest, UpdateSalaryBatchDataResponse } from "../../models/SalaryBatch/UpdateSalaryBatchData";

        /**
* @link /api/services/app/SalaryBatch/UpdateSalaryBatchData
*/
        export function useUpdateSalaryBatchData <TData = UpdateSalaryBatchDataResponse, TError = unknown, TVariables = UpdateSalaryBatchDataRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/SalaryBatch/UpdateSalaryBatchData`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    