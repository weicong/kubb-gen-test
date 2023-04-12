
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRegionalStatsResponse } from "../../models/TenantDashboard/GetRegionalStats";

        export const getRegionalStatsQueryKey = () => [`/api/services/app/TenantDashboard/GetRegionalStats`] as const;
      

      export function getRegionalStatsQueryOptions <TData = GetRegionalStatsResponse>(): QueryOptions<TData> {
        const queryKey =getRegionalStatsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetRegionalStats`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetRegionalStats
*/
        export function useGetRegionalStats <TData = GetRegionalStatsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRegionalStatsQueryKey();

          const query = useQuery<TData, TError>({
            ...getRegionalStatsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      