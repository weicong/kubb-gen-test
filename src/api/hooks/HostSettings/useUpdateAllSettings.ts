
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateAllSettingsRequest, UpdateAllSettingsResponse } from "../../models/HostSettings/UpdateAllSettings";

        /**
* @link /api/services/app/HostSettings/UpdateAllSettings
*/
        export function useUpdateAllSettings <TData = UpdateAllSettingsResponse, TError = unknown, TVariables = UpdateAllSettingsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/HostSettings/UpdateAllSettings`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    