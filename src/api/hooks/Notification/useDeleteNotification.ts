
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteNotificationRequest, DeleteNotificationResponse, DeleteNotificationQueryParams } from "../../models/Notification/DeleteNotification";

        /**
* @link /api/services/app/Notification/DeleteNotification
*/
        export function useDeleteNotification <TData = DeleteNotificationResponse, TError = unknown, TVariables = DeleteNotificationRequest>( params?: DeleteNotificationQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Notification/DeleteNotification`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    