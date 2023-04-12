
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SaveBudgetItemExecutionQuarterListRequest, SaveBudgetItemExecutionQuarterListResponse } from "../../models/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList";

        /**
* @summary 保存政采预算项季度
* @link /api/services/app/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList
*/
        export function useSaveBudgetItemExecutionQuarterList <TData = SaveBudgetItemExecutionQuarterListResponse, TError = unknown, TVariables = SaveBudgetItemExecutionQuarterListRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    