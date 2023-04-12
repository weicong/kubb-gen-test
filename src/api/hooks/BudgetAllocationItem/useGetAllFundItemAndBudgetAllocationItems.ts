
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllFundItemAndBudgetAllocationItemsResponse, GetAllFundItemAndBudgetAllocationItemsQueryParams } from "../../models/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems";

        export const getAllFundItemAndBudgetAllocationItemsQueryKey = (params?: GetAllFundItemAndBudgetAllocationItemsQueryParams) => [`/api/services/app/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems`, ...(params ? [params] : [])] as const;
      

        export function getAllFundItemAndBudgetAllocationItemsQueryOptions <TData = GetAllFundItemAndBudgetAllocationItemsResponse>(params?: GetAllFundItemAndBudgetAllocationItemsQueryParams): QueryOptions<TData> {
          const queryKey =getAllFundItemAndBudgetAllocationItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems
*/
        export function useGetAllFundItemAndBudgetAllocationItems <TData = GetAllFundItemAndBudgetAllocationItemsResponse, TError = unknown>(params?: GetAllFundItemAndBudgetAllocationItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllFundItemAndBudgetAllocationItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllFundItemAndBudgetAllocationItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      