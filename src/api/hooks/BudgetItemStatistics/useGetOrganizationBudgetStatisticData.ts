
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationBudgetStatisticDataResponse, GetOrganizationBudgetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetOrganizationBudgetStatisticData";

        export const getOrganizationBudgetStatisticDataQueryKey = (params?: GetOrganizationBudgetStatisticDataQueryParams) => [`/api/services/app/BudgetItemStatistics/GetOrganizationBudgetStatisticData`, ...(params ? [params] : [])] as const;
      

        export function getOrganizationBudgetStatisticDataQueryOptions <TData = GetOrganizationBudgetStatisticDataResponse>(params?: GetOrganizationBudgetStatisticDataQueryParams): QueryOptions<TData> {
          const queryKey =getOrganizationBudgetStatisticDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetItemStatistics/GetOrganizationBudgetStatisticData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetItemStatistics/GetOrganizationBudgetStatisticData
*/
        export function useGetOrganizationBudgetStatisticData <TData = GetOrganizationBudgetStatisticDataResponse, TError = unknown>(params?: GetOrganizationBudgetStatisticDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationBudgetStatisticDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getOrganizationBudgetStatisticDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      