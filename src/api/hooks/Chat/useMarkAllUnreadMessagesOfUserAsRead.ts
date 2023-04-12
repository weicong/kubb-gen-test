
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { MarkAllUnreadMessagesOfUserAsReadRequest, MarkAllUnreadMessagesOfUserAsReadResponse } from "../../models/Chat/MarkAllUnreadMessagesOfUserAsRead";

        /**
* @link /api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead
*/
        export function useMarkAllUnreadMessagesOfUserAsRead <TData = MarkAllUnreadMessagesOfUserAsReadResponse, TError = unknown, TVariables = MarkAllUnreadMessagesOfUserAsReadRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    