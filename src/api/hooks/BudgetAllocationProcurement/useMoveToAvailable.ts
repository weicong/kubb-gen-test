
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { MoveToAvailableRequest, MoveToAvailableResponse } from "../../models/BudgetAllocationProcurement/MoveToAvailable";

        /**
* @link /api/services/app/BudgetAllocationProcurement/MoveToAvailable
*/
        export function useMoveToAvailable <TData = MoveToAvailableResponse, TError = unknown, TVariables = MoveToAvailableRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationProcurement/MoveToAvailable`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    