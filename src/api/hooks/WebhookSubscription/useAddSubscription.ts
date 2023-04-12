
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddSubscriptionRequest, AddSubscriptionResponse } from "../../models/WebhookSubscription/AddSubscription";

        /**
* @link /api/services/app/WebhookSubscription/AddSubscription
*/
        export function useAddSubscription <TData = AddSubscriptionResponse, TError = unknown, TVariables = AddSubscriptionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/WebhookSubscription/AddSubscription`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    