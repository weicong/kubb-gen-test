
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { PublishTestWebhookRequest, PublishTestWebhookResponse } from "../../models/WebhookSubscription/PublishTestWebhook";

        /**
* @link /api/services/app/WebhookSubscription/PublishTestWebhook
*/
        export function usePublishTestWebhook <TData = PublishTestWebhookResponse, TError = unknown, TVariables = PublishTestWebhookRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/WebhookSubscription/PublishTestWebhook`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    