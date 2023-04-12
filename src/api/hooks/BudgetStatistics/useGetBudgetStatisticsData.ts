
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetStatisticsDataResponse, GetBudgetStatisticsDataQueryParams } from "../../models/BudgetStatistics/GetBudgetStatisticsData";

        export const getBudgetStatisticsDataQueryKey = (params?: GetBudgetStatisticsDataQueryParams) => [`/api/services/app/BudgetStatistics/GetBudgetStatisticsData`, ...(params ? [params] : [])] as const;
      

        export function getBudgetStatisticsDataQueryOptions <TData = GetBudgetStatisticsDataResponse>(params?: GetBudgetStatisticsDataQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetStatisticsDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetStatistics/GetBudgetStatisticsData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetStatistics/GetBudgetStatisticsData
*/
        export function useGetBudgetStatisticsData <TData = GetBudgetStatisticsDataResponse, TError = unknown>(params?: GetBudgetStatisticsDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetStatisticsDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetStatisticsDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      