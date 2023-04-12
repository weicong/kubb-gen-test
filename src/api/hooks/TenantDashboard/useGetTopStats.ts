
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTopStatsResponse } from "../../models/TenantDashboard/GetTopStats";

        export const getTopStatsQueryKey = () => [`/api/services/app/TenantDashboard/GetTopStats`] as const;
      

      export function getTopStatsQueryOptions <TData = GetTopStatsResponse>(): QueryOptions<TData> {
        const queryKey =getTopStatsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetTopStats`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetTopStats
*/
        export function useGetTopStats <TData = GetTopStatsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTopStatsQueryKey();

          const query = useQuery<TData, TError>({
            ...getTopStatsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      