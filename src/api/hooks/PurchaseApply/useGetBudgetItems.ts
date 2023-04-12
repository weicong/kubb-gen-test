
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetItemsResponse, GetBudgetItemsQueryParams } from "../../models/PurchaseApply/GetBudgetItems";

        export const getBudgetItemsQueryKey = (params?: GetBudgetItemsQueryParams) => [`/api/services/app/PurchaseApply/GetBudgetItems`, ...(params ? [params] : [])] as const;
      

        export function getBudgetItemsQueryOptions <TData = GetBudgetItemsResponse>(params?: GetBudgetItemsQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/PurchaseApply/GetBudgetItems`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/PurchaseApply/GetBudgetItems
*/
        export function useGetBudgetItems <TData = GetBudgetItemsResponse, TError = unknown>(params?: GetBudgetItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      