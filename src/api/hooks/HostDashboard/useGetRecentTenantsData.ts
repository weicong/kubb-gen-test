
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRecentTenantsDataResponse } from "../../models/HostDashboard/GetRecentTenantsData";

        export const getRecentTenantsDataQueryKey = () => [`/api/services/app/HostDashboard/GetRecentTenantsData`] as const;
      

      export function getRecentTenantsDataQueryOptions <TData = GetRecentTenantsDataResponse>(): QueryOptions<TData> {
        const queryKey =getRecentTenantsDataQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/HostDashboard/GetRecentTenantsData`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/HostDashboard/GetRecentTenantsData
*/
        export function useGetRecentTenantsData <TData = GetRecentTenantsDataResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRecentTenantsDataQueryKey();

          const query = useQuery<TData, TError>({
            ...getRecentTenantsDataQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      