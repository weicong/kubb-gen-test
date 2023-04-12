
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateContractPayStateRequest, UpdateContractPayStateResponse } from "../../models/ContractPay/UpdateContractPayState";

        /**
* @summary 更新合同支付状态
* @link /api/services/app/ContractPay/UpdateContractPayState
*/
        export function useUpdateContractPayState <TData = UpdateContractPayStateResponse, TError = unknown, TVariables = UpdateContractPayStateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/ContractPay/UpdateContractPayState`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    