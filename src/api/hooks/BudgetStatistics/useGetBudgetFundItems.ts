
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetFundItemsResponse, GetBudgetFundItemsQueryParams } from "../../models/BudgetStatistics/GetBudgetFundItems";

        export const getBudgetFundItemsQueryKey = (params?: GetBudgetFundItemsQueryParams) => [`/api/services/app/BudgetStatistics/GetBudgetFundItems`, ...(params ? [params] : [])] as const;
      

        export function getBudgetFundItemsQueryOptions <TData = GetBudgetFundItemsResponse>(params?: GetBudgetFundItemsQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetFundItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetStatistics/GetBudgetFundItems`,
                params
              });
            },
          };
        };
      

        /**
* @summary 获取支出科目
* @link /api/services/app/BudgetStatistics/GetBudgetFundItems
*/
        export function useGetBudgetFundItems <TData = GetBudgetFundItemsResponse, TError = unknown>(params?: GetBudgetFundItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetFundItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetFundItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      