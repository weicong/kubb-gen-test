
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionTenantStatisticsResponse, GetEditionTenantStatisticsQueryParams } from "../../models/HostDashboard/GetEditionTenantStatistics";

        export const getEditionTenantStatisticsQueryKey = (params?: GetEditionTenantStatisticsQueryParams) => [`/api/services/app/HostDashboard/GetEditionTenantStatistics`, ...(params ? [params] : [])] as const;
      

        export function getEditionTenantStatisticsQueryOptions <TData = GetEditionTenantStatisticsResponse>(params?: GetEditionTenantStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getEditionTenantStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/HostDashboard/GetEditionTenantStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/HostDashboard/GetEditionTenantStatistics
*/
        export function useGetEditionTenantStatistics <TData = GetEditionTenantStatisticsResponse, TError = unknown>(params?: GetEditionTenantStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionTenantStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEditionTenantStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      