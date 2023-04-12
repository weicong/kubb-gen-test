
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetExecutionModeStatisticDataResponse, GetBudgetExecutionModeStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetBudgetExecutionModeStatisticData";

        export const getBudgetExecutionModeStatisticDataQueryKey = (params?: GetBudgetExecutionModeStatisticDataQueryParams) => [`/api/services/app/BudgetItemStatistics/GetBudgetExecutionModeStatisticData`, ...(params ? [params] : [])] as const;
      

        export function getBudgetExecutionModeStatisticDataQueryOptions <TData = GetBudgetExecutionModeStatisticDataResponse>(params?: GetBudgetExecutionModeStatisticDataQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetExecutionModeStatisticDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetItemStatistics/GetBudgetExecutionModeStatisticData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetItemStatistics/GetBudgetExecutionModeStatisticData
*/
        export function useGetBudgetExecutionModeStatisticData <TData = GetBudgetExecutionModeStatisticDataResponse, TError = unknown>(params?: GetBudgetExecutionModeStatisticDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetExecutionModeStatisticDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetExecutionModeStatisticDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      