
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateListRequest, UpdateListResponse } from "../../models/BudgetAllocationItem/UpdateList";

        /**
* @link /api/services/app/BudgetAllocationItem/UpdateList
*/
        export function useUpdateList <TData = UpdateListResponse, TError = unknown, TVariables = UpdateListRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/BudgetAllocationItem/UpdateList`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    