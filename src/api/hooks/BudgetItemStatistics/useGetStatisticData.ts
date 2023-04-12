
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetStatisticDataResponse, GetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetStatisticData";

        export const getStatisticDataQueryKey = (params?: GetStatisticDataQueryParams) => [`/api/services/app/BudgetItemStatistics/GetStatisticData`, ...(params ? [params] : [])] as const;
      

        export function getStatisticDataQueryOptions <TData = GetStatisticDataResponse>(params?: GetStatisticDataQueryParams): QueryOptions<TData> {
          const queryKey =getStatisticDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetItemStatistics/GetStatisticData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/BudgetItemStatistics/GetStatisticData
*/
        export function useGetStatisticData <TData = GetStatisticDataResponse, TError = unknown>(params?: GetStatisticDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getStatisticDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getStatisticDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      