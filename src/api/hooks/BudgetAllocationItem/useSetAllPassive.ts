
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetAllPassiveRequest, SetAllPassiveResponse } from "../../models/BudgetAllocationItem/SetAllPassive";

        /**
* @link /api/services/app/BudgetAllocationItem/SetAllPassive
*/
        export function useSetAllPassive <TData = SetAllPassiveResponse, TError = unknown, TVariables = SetAllPassiveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationItem/SetAllPassive`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    