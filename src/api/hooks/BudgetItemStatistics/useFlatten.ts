
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FlattenRequest, FlattenResponse } from "../../models/BudgetItemStatistics/Flatten";

        /**
* @link /api/services/app/BudgetItemStatistics/Flatten
*/
        export function useFlatten <TData = FlattenResponse, TError = unknown, TVariables = FlattenRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetItemStatistics/Flatten`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    