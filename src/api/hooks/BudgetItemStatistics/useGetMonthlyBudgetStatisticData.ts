
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetMonthlyBudgetStatisticDataResponse, GetMonthlyBudgetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetMonthlyBudgetStatisticData";

        export const getMonthlyBudgetStatisticDataQueryKey = (params?: GetMonthlyBudgetStatisticDataQueryParams) => [`/api/services/app/BudgetItemStatistics/GetMonthlyBudgetStatisticData`, ...(params ? [params] : [])] as const;
      

        export function getMonthlyBudgetStatisticDataQueryOptions <TData = GetMonthlyBudgetStatisticDataResponse>(params?: GetMonthlyBudgetStatisticDataQueryParams): QueryOptions<TData> {
          const queryKey =getMonthlyBudgetStatisticDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetItemStatistics/GetMonthlyBudgetStatisticData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetItemStatistics/GetMonthlyBudgetStatisticData
*/
        export function useGetMonthlyBudgetStatisticData <TData = GetMonthlyBudgetStatisticDataResponse, TError = unknown>(params?: GetMonthlyBudgetStatisticDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getMonthlyBudgetStatisticDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getMonthlyBudgetStatisticDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      