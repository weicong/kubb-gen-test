
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllCachesResponse } from "../../models/Caching/GetAllCaches";

        export const getAllCachesQueryKey = () => [`/api/services/app/Caching/GetAllCaches`] as const;
      

      export function getAllCachesQueryOptions <TData = GetAllCachesResponse>(): QueryOptions<TData> {
        const queryKey =getAllCachesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Caching/GetAllCaches`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Caching/GetAllCaches
*/
        export function useGetAllCaches <TData = GetAllCachesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllCachesQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllCachesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      