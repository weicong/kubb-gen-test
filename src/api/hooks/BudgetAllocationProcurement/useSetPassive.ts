
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetPassiveRequest, SetPassiveResponse } from "../../models/BudgetAllocationProcurement/SetPassive";

        /**
* @link /api/services/app/BudgetAllocationProcurement/SetPassive
*/
        export function useSetPassive <TData = SetPassiveResponse, TError = unknown, TVariables = SetPassiveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationProcurement/SetPassive`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    