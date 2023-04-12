
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RemoveDelegationRequest, RemoveDelegationResponse, RemoveDelegationQueryParams } from "../../models/UserDelegation/RemoveDelegation";

        /**
* @link /api/services/app/UserDelegation/RemoveDelegation
*/
        export function useRemoveDelegation <TData = RemoveDelegationResponse, TError = unknown, TVariables = RemoveDelegationRequest>( params?: RemoveDelegationQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/UserDelegation/RemoveDelegation`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    