
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetInvalidRequest, SetInvalidResponse } from "../../models/PurchasePackageItem/SetInvalid";

        /**
* @summary 作废
* @link /api/services/app/PurchasePackageItem/SetInvalid
*/
        export function useSetInvalid <TData = SetInvalidResponse, TError = unknown, TVariables = SetInvalidRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PurchasePackageItem/SetInvalid`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    