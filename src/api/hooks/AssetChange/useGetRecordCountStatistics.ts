
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/AssetChange/GetRecordCountStatistics";

        export const getRecordCountStatisticsQueryKey = (params?: GetRecordCountStatisticsQueryParams) => [`/api/services/app/AssetChange/GetRecordCountStatistics`, ...(params ? [params] : [])] as const;
      

        export function getRecordCountStatisticsQueryOptions <TData = GetRecordCountStatisticsResponse>(params?: GetRecordCountStatisticsQueryParams): QueryOptions<TData> {
          const queryKey =getRecordCountStatisticsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AssetChange/GetRecordCountStatistics`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AssetChange/GetRecordCountStatistics
*/
        export function useGetRecordCountStatistics <TData = GetRecordCountStatisticsResponse, TError = unknown>(params?: GetRecordCountStatisticsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRecordCountStatisticsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getRecordCountStatisticsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      