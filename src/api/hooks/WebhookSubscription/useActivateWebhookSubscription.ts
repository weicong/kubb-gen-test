
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ActivateWebhookSubscriptionRequest, ActivateWebhookSubscriptionResponse } from "../../models/WebhookSubscription/ActivateWebhookSubscription";

        /**
* @link /api/services/app/WebhookSubscription/ActivateWebhookSubscription
*/
        export function useActivateWebhookSubscription <TData = ActivateWebhookSubscriptionResponse, TError = unknown, TVariables = ActivateWebhookSubscriptionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/WebhookSubscription/ActivateWebhookSubscription`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    