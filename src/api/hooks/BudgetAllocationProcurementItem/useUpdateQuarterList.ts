
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateQuarterListRequest, UpdateQuarterListResponse } from "../../models/BudgetAllocationProcurementItem/UpdateQuarterList";

        /**
* @summary 以列表更新季度
* @link /api/services/app/BudgetAllocationProcurementItem/UpdateQuarterList
*/
        export function useUpdateQuarterList <TData = UpdateQuarterListResponse, TError = unknown, TVariables = UpdateQuarterListRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/BudgetAllocationProcurementItem/UpdateQuarterList`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    