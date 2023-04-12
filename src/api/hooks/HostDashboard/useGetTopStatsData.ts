
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTopStatsDataResponse, GetTopStatsDataQueryParams } from "../../models/HostDashboard/GetTopStatsData";

        export const getTopStatsDataQueryKey = (params?: GetTopStatsDataQueryParams) => [`/api/services/app/HostDashboard/GetTopStatsData`, ...(params ? [params] : [])] as const;
      

        export function getTopStatsDataQueryOptions <TData = GetTopStatsDataResponse>(params?: GetTopStatsDataQueryParams): QueryOptions<TData> {
          const queryKey =getTopStatsDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/HostDashboard/GetTopStatsData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/HostDashboard/GetTopStatsData
*/
        export function useGetTopStatsData <TData = GetTopStatsDataResponse, TError = unknown>(params?: GetTopStatsDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTopStatsDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTopStatsDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      