
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CheckAmountRequest, CheckAmountResponse } from "../../models/BudgetAllocationDetail/CheckAmount";

        /**
* @link /api/services/app/BudgetAllocationDetail/CheckAmount
*/
        export function useCheckAmount <TData = CheckAmountResponse, TError = unknown, TVariables = CheckAmountRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationDetail/CheckAmount`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    