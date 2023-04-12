
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { BatchUpdateBudgetItemParentIdRequest, BatchUpdateBudgetItemParentIdResponse } from "../../models/BudgetItem/BatchUpdateBudgetItemParentId";

        /**
* @summary 批量修改ParentId
* @link /api/services/app/BudgetItem/BatchUpdateBudgetItemParentId
*/
        export function useBatchUpdateBudgetItemParentId <TData = BatchUpdateBudgetItemParentIdResponse, TError = unknown, TVariables = BatchUpdateBudgetItemParentIdRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetItem/BatchUpdateBudgetItemParentId`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    