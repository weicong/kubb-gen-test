
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetSubscriptionResponse, GetSubscriptionQueryParams } from "../../models/WebhookSubscription/GetSubscription";

        export const getSubscriptionQueryKey = (params?: GetSubscriptionQueryParams) => [`/api/services/app/WebhookSubscription/GetSubscription`, ...(params ? [params] : [])] as const;
      

        export function getSubscriptionQueryOptions <TData = GetSubscriptionResponse>(params?: GetSubscriptionQueryParams): QueryOptions<TData> {
          const queryKey =getSubscriptionQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/WebhookSubscription/GetSubscription`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/WebhookSubscription/GetSubscription
*/
        export function useGetSubscription <TData = GetSubscriptionResponse, TError = unknown>(params?: GetSubscriptionQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getSubscriptionQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getSubscriptionQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      