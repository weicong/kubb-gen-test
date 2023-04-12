
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateContractFinalMoneyRequest, UpdateContractFinalMoneyResponse } from "../../models/Contract/UpdateContractFinalMoney";

        /**
* @summary 更新备案信息
* @link /api/services/app/Contract/UpdateContractFinalMoney
*/
        export function useUpdateContractFinalMoney <TData = UpdateContractFinalMoneyResponse, TError = unknown, TVariables = UpdateContractFinalMoneyRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Contract/UpdateContractFinalMoney`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    