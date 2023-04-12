
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteAllUserNotificationsRequest, DeleteAllUserNotificationsResponse, DeleteAllUserNotificationsQueryParams } from "../../models/Notification/DeleteAllUserNotifications";

        /**
* @link /api/services/app/Notification/DeleteAllUserNotifications
*/
        export function useDeleteAllUserNotifications <TData = DeleteAllUserNotificationsResponse, TError = unknown, TVariables = DeleteAllUserNotificationsRequest>( params?: DeleteAllUserNotificationsQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Notification/DeleteAllUserNotifications`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    