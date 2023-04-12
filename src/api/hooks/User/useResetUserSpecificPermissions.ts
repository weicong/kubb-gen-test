
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ResetUserSpecificPermissionsRequest, ResetUserSpecificPermissionsResponse } from "../../models/User/ResetUserSpecificPermissions";

        /**
* @link /api/services/app/User/ResetUserSpecificPermissions
*/
        export function useResetUserSpecificPermissions <TData = ResetUserSpecificPermissionsResponse, TError = unknown, TVariables = ResetUserSpecificPermissionsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/ResetUserSpecificPermissions`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    