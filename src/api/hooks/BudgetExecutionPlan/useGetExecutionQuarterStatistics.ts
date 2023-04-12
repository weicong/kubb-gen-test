
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetExecutionQuarterStatisticsResponse, GetExecutionQuarterStatisticsQueryParams } from "../../models/BudgetExecutionPlan/GetExecutionQuarterStatistics";

        export const getExecutionQuarterStatisticsQueryKey = (params?: GetExecutionQuarterStatisticsQueryParams) => [`/api/services/app/BudgetExecutionPlan/GetExecutionQuarterStatistics`, ...(params ? [params] : [])] as const;
      

        export function getExecutionQuarterStatisticsQueryOptions <TData = GetExecutionQuarterStatisticsResponse>(params?: GetExecutionQuarterStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getExecutionQuarterStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetExecutionPlan/GetExecutionQuarterStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @summary 获取用款计划（审批单、非政采预算项季度用款情况、政采预算项）
* @link /api/services/app/BudgetExecutionPlan/GetExecutionQuarterStatistics
*/
        export function useGetExecutionQuarterStatistics <TData = GetExecutionQuarterStatisticsResponse, TError = unknown>(params?: GetExecutionQuarterStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getExecutionQuarterStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getExecutionQuarterStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      