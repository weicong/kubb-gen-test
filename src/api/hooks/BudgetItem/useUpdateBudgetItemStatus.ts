
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateBudgetItemStatusRequest, UpdateBudgetItemStatusResponse } from "../../models/BudgetItem/UpdateBudgetItemStatus";

        /**
* @description 可以禁用、更改使用科室
* @summary 更新状态
* @link /api/services/app/BudgetItem/UpdateBudgetItemStatus
*/
        export function useUpdateBudgetItemStatus <TData = UpdateBudgetItemStatusResponse, TError = unknown, TVariables = UpdateBudgetItemStatusRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/BudgetItem/UpdateBudgetItemStatus`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    