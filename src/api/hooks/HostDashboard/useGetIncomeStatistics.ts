
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetIncomeStatisticsResponse, GetIncomeStatisticsQueryParams } from "../../models/HostDashboard/GetIncomeStatistics";

        export const getIncomeStatisticsQueryKey = (params?: GetIncomeStatisticsQueryParams) => [`/api/services/app/HostDashboard/GetIncomeStatistics`, ...(params ? [params] : [])] as const;
      

        export function getIncomeStatisticsQueryOptions <TData = GetIncomeStatisticsResponse>(params?: GetIncomeStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getIncomeStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/HostDashboard/GetIncomeStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/HostDashboard/GetIncomeStatistics
*/
        export function useGetIncomeStatistics <TData = GetIncomeStatisticsResponse, TError = unknown>(params?: GetIncomeStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getIncomeStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getIncomeStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      