
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetAllNotificationsAsReadRequest, SetAllNotificationsAsReadResponse } from "../../models/Notification/SetAllNotificationsAsRead";

        /**
* @link /api/services/app/Notification/SetAllNotificationsAsRead
*/
        export function useSetAllNotificationsAsRead <TData = SetAllNotificationsAsReadResponse, TError = unknown, TVariables = SetAllNotificationsAsReadRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Notification/SetAllNotificationsAsRead`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    