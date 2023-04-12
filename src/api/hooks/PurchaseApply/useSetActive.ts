
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/PurchaseApply/SetActive";

        /**
* @summary 定稿
* @link /api/services/app/PurchaseApply/SetActive
*/
        export function useSetActive <TData = SetActiveResponse, TError = unknown, TVariables = SetActiveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PurchaseApply/SetActive`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    