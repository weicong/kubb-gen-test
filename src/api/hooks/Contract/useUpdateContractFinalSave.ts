
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateContractFinalSaveRequest, UpdateContractFinalSaveResponse } from "../../models/Contract/UpdateContractFinalSave";

        /**
* @summary 更新合同备案状态
* @link /api/services/app/Contract/UpdateContractFinalSave
*/
        export function useUpdateContractFinalSave <TData = UpdateContractFinalSaveResponse, TError = unknown, TVariables = UpdateContractFinalSaveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Contract/UpdateContractFinalSave`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    