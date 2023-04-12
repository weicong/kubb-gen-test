
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetDashboardDataResponse, GetDashboardDataQueryParams } from "../../models/TenantDashboard/GetDashboardData";

        export const getDashboardDataQueryKey = (params?: GetDashboardDataQueryParams) => [`/api/services/app/TenantDashboard/GetDashboardData`, ...(params ? [params] : [])] as const;
      

        export function getDashboardDataQueryOptions <TData = GetDashboardDataResponse>(params?: GetDashboardDataQueryParams): QueryOptions<TData> {
          const queryKey =getDashboardDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/TenantDashboard/GetDashboardData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/TenantDashboard/GetDashboardData
*/
        export function useGetDashboardData <TData = GetDashboardDataResponse, TError = unknown>(params?: GetDashboardDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getDashboardDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getDashboardDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      