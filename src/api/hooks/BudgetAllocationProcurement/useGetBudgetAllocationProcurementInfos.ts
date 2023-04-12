
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetAllocationProcurementInfosResponse, GetBudgetAllocationProcurementInfosQueryParams } from "../../models/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos";

        export const getBudgetAllocationProcurementInfosQueryKey = (params?: GetBudgetAllocationProcurementInfosQueryParams) => [`/api/services/app/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos`, ...(params ? [params] : [])] as const;
      

        export function getBudgetAllocationProcurementInfosQueryOptions <TData = GetBudgetAllocationProcurementInfosResponse>(params?: GetBudgetAllocationProcurementInfosQueryParams): QueryOptions<TData> {
          const queryKey =getBudgetAllocationProcurementInfosQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos
*/
        export function useGetBudgetAllocationProcurementInfos <TData = GetBudgetAllocationProcurementInfosResponse, TError = unknown>(params?: GetBudgetAllocationProcurementInfosQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetAllocationProcurementInfosQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getBudgetAllocationProcurementInfosQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      