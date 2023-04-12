
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllSubscriptionsResponse } from "../../models/WebhookSubscription/GetAllSubscriptions";

        export const getAllSubscriptionsQueryKey = () => [`/api/services/app/WebhookSubscription/GetAllSubscriptions`] as const;
      

      export function getAllSubscriptionsQueryOptions <TData = GetAllSubscriptionsResponse>(): QueryOptions<TData> {
        const queryKey =getAllSubscriptionsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/WebhookSubscription/GetAllSubscriptions`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/WebhookSubscription/GetAllSubscriptions
*/
        export function useGetAllSubscriptions <TData = GetAllSubscriptionsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllSubscriptionsQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllSubscriptionsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      