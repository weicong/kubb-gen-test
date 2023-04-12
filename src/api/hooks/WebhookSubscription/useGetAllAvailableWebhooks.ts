
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllAvailableWebhooksResponse } from "../../models/WebhookSubscription/GetAllAvailableWebhooks";

        export const getAllAvailableWebhooksQueryKey = () => [`/api/services/app/WebhookSubscription/GetAllAvailableWebhooks`] as const;
      

      export function getAllAvailableWebhooksQueryOptions <TData = GetAllAvailableWebhooksResponse>(): QueryOptions<TData> {
        const queryKey =getAllAvailableWebhooksQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/WebhookSubscription/GetAllAvailableWebhooks`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/WebhookSubscription/GetAllAvailableWebhooks
*/
        export function useGetAllAvailableWebhooks <TData = GetAllAvailableWebhooksResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllAvailableWebhooksQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllAvailableWebhooksQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      