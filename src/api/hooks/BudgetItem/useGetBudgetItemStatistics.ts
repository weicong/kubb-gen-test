
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetItemStatisticsResponse, GetBudgetItemStatisticsQueryParams } from "../../models/BudgetItem/GetBudgetItemStatistics";

        export const getBudgetItemStatisticsQueryKey = (params?: GetBudgetItemStatisticsQueryParams) => [`/api/services/app/BudgetItem/GetBudgetItemStatistics`, ...(params ? [params] : [])] as const;
      

        export function getBudgetItemStatisticsQueryOptions <TData = GetBudgetItemStatisticsResponse>(params?: GetBudgetItemStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetItemStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetItem/GetBudgetItemStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetItem/GetBudgetItemStatistics
*/
        export function useGetBudgetItemStatistics <TData = GetBudgetItemStatisticsResponse, TError = unknown>(params?: GetBudgetItemStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetItemStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetItemStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      