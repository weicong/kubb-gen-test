
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateSubscriptionRequest, UpdateSubscriptionResponse } from "../../models/WebhookSubscription/UpdateSubscription";

        /**
* @link /api/services/app/WebhookSubscription/UpdateSubscription
*/
        export function useUpdateSubscription <TData = UpdateSubscriptionResponse, TError = unknown, TVariables = UpdateSubscriptionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/WebhookSubscription/UpdateSubscription`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    