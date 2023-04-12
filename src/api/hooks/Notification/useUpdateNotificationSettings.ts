
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../../models/Notification/UpdateNotificationSettings";

        /**
* @link /api/services/app/Notification/UpdateNotificationSettings
*/
        export function useUpdateNotificationSettings <TData = UpdateNotificationSettingsResponse, TError = unknown, TVariables = UpdateNotificationSettingsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Notification/UpdateNotificationSettings`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    