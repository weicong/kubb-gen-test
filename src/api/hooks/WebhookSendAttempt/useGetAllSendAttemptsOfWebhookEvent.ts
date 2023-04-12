
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllSendAttemptsOfWebhookEventResponse, GetAllSendAttemptsOfWebhookEventQueryParams } from "../../models/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent";

        export const getAllSendAttemptsOfWebhookEventQueryKey = (params?: GetAllSendAttemptsOfWebhookEventQueryParams) => [`/api/services/app/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent`, ...(params ? [params] : [])] as const;
      

        export function getAllSendAttemptsOfWebhookEventQueryOptions <TData = GetAllSendAttemptsOfWebhookEventResponse>(params?: GetAllSendAttemptsOfWebhookEventQueryParams): QueryOptions<TData> {
          const queryKey =getAllSendAttemptsOfWebhookEventQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent
*/
        export function useGetAllSendAttemptsOfWebhookEvent <TData = GetAllSendAttemptsOfWebhookEventResponse, TError = unknown>(params?: GetAllSendAttemptsOfWebhookEventQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllSendAttemptsOfWebhookEventQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllSendAttemptsOfWebhookEventQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      