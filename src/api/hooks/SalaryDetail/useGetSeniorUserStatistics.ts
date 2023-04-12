
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetSeniorUserStatisticsResponse, GetSeniorUserStatisticsQueryParams } from "../../models/SalaryDetail/GetSeniorUserStatistics";

        export const getSeniorUserStatisticsQueryKey = (params?: GetSeniorUserStatisticsQueryParams) => [`/api/services/app/SalaryDetail/GetSeniorUserStatistics`, ...(params ? [params] : [])] as const;
      

        export function getSeniorUserStatisticsQueryOptions <TData = GetSeniorUserStatisticsResponse>(params?: GetSeniorUserStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getSeniorUserStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/SalaryDetail/GetSeniorUserStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/SalaryDetail/GetSeniorUserStatistics
*/
        export function useGetSeniorUserStatistics <TData = GetSeniorUserStatisticsResponse, TError = unknown>(params?: GetSeniorUserStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getSeniorUserStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getSeniorUserStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      