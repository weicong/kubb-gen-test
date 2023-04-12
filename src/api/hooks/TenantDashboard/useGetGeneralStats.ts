
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetGeneralStatsResponse } from "../../models/TenantDashboard/GetGeneralStats";

        export const getGeneralStatsQueryKey = () => [`/api/services/app/TenantDashboard/GetGeneralStats`] as const;
      

      export function getGeneralStatsQueryOptions <TData = GetGeneralStatsResponse>(): QueryOptions<TData> {
        const queryKey =getGeneralStatsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetGeneralStats`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetGeneralStats
*/
        export function useGetGeneralStats <TData = GetGeneralStatsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getGeneralStatsQueryKey();

          const query = useQuery<TData, TError>({
            ...getGeneralStatsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      