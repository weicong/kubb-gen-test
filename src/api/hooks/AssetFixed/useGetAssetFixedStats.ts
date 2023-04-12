
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAssetFixedStatsResponse, GetAssetFixedStatsQueryParams } from "../../models/AssetFixed/GetAssetFixedStats";

        export const getAssetFixedStatsQueryKey = (params?: GetAssetFixedStatsQueryParams) => [`/api/services/app/AssetFixed/GetAssetFixedStats`, ...(params ? [params] : [])] as const;
      

        export function getAssetFixedStatsQueryOptions <TData = GetAssetFixedStatsResponse>(params?: GetAssetFixedStatsQueryParams): QueryOptions<TData> {
          const queryKey =getAssetFixedStatsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AssetFixed/GetAssetFixedStats`,
                params
              });
            },
          };
        };
      

        /**
* @summary 统计
* @link /api/services/app/AssetFixed/GetAssetFixedStats
*/
        export function useGetAssetFixedStats <TData = GetAssetFixedStatsResponse, TError = unknown>(params?: GetAssetFixedStatsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAssetFixedStatsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAssetFixedStatsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      