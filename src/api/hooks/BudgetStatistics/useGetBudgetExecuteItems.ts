
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetExecuteItemsResponse, GetBudgetExecuteItemsQueryParams } from "../../models/BudgetStatistics/GetBudgetExecuteItems";

        export const getBudgetExecuteItemsQueryKey = (params?: GetBudgetExecuteItemsQueryParams) => [`/api/services/app/BudgetStatistics/GetBudgetExecuteItems`, ...(params ? [params] : [])] as const;
      

        export function getBudgetExecuteItemsQueryOptions <TData = GetBudgetExecuteItemsResponse>(params?: GetBudgetExecuteItemsQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetExecuteItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetStatistics/GetBudgetExecuteItems`,
                params
              });
            },
          };
        };
      

        /**
* @summary 预算执行记录
* @link /api/services/app/BudgetStatistics/GetBudgetExecuteItems
*/
        export function useGetBudgetExecuteItems <TData = GetBudgetExecuteItemsResponse, TError = unknown>(params?: GetBudgetExecuteItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetExecuteItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetExecuteItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      