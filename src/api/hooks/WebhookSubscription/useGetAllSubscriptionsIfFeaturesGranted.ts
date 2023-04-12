
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllSubscriptionsIfFeaturesGrantedResponse, GetAllSubscriptionsIfFeaturesGrantedQueryParams } from "../../models/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted";

        export const getAllSubscriptionsIfFeaturesGrantedQueryKey = (params?: GetAllSubscriptionsIfFeaturesGrantedQueryParams) => [`/api/services/app/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted`, ...(params ? [params] : [])] as const;
      

        export function getAllSubscriptionsIfFeaturesGrantedQueryOptions <TData = GetAllSubscriptionsIfFeaturesGrantedResponse>(params?: GetAllSubscriptionsIfFeaturesGrantedQueryParams): QueryOptions<TData> {
          const queryKey =getAllSubscriptionsIfFeaturesGrantedQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted
*/
        export function useGetAllSubscriptionsIfFeaturesGranted <TData = GetAllSubscriptionsIfFeaturesGrantedResponse, TError = unknown>(params?: GetAllSubscriptionsIfFeaturesGrantedQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllSubscriptionsIfFeaturesGrantedQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllSubscriptionsIfFeaturesGrantedQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      