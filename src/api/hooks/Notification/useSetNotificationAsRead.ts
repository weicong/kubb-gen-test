
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetNotificationAsReadRequest, SetNotificationAsReadResponse } from "../../models/Notification/SetNotificationAsRead";

        /**
* @link /api/services/app/Notification/SetNotificationAsRead
*/
        export function useSetNotificationAsRead <TData = SetNotificationAsReadResponse, TError = unknown, TVariables = SetNotificationAsReadRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Notification/SetNotificationAsRead`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    