
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetSubscriptionExpiringTenantsDataResponse } from "../../models/HostDashboard/GetSubscriptionExpiringTenantsData";

        export const getSubscriptionExpiringTenantsDataQueryKey = () => [`/api/services/app/HostDashboard/GetSubscriptionExpiringTenantsData`] as const;
      

      export function getSubscriptionExpiringTenantsDataQueryOptions <TData = GetSubscriptionExpiringTenantsDataResponse>(): QueryOptions<TData> {
        const queryKey =getSubscriptionExpiringTenantsDataQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/HostDashboard/GetSubscriptionExpiringTenantsData`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/HostDashboard/GetSubscriptionExpiringTenantsData
*/
        export function useGetSubscriptionExpiringTenantsData <TData = GetSubscriptionExpiringTenantsDataResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getSubscriptionExpiringTenantsDataQueryKey();

          const query = useQuery<TData, TError>({
            ...getSubscriptionExpiringTenantsDataQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      