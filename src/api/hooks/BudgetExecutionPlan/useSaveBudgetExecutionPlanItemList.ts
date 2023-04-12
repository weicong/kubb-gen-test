
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SaveBudgetExecutionPlanItemListRequest, SaveBudgetExecutionPlanItemListResponse } from "../../models/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList";

        /**
* @summary 保存非政采预算项季度用款情况
* @link /api/services/app/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList
*/
        export function useSaveBudgetExecutionPlanItemList <TData = SaveBudgetExecutionPlanItemListResponse, TError = unknown, TVariables = SaveBudgetExecutionPlanItemListRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    