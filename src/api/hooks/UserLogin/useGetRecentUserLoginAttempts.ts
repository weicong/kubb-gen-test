
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRecentUserLoginAttemptsResponse } from "../../models/UserLogin/GetRecentUserLoginAttempts";

        export const getRecentUserLoginAttemptsQueryKey = () => [`/api/services/app/UserLogin/GetRecentUserLoginAttempts`] as const;
      

      export function getRecentUserLoginAttemptsQueryOptions <TData = GetRecentUserLoginAttemptsResponse>(): QueryOptions<TData> {
        const queryKey =getRecentUserLoginAttemptsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/UserLogin/GetRecentUserLoginAttempts`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/UserLogin/GetRecentUserLoginAttempts
*/
        export function useGetRecentUserLoginAttempts <TData = GetRecentUserLoginAttemptsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRecentUserLoginAttemptsQueryKey();

          const query = useQuery<TData, TError>({
            ...getRecentUserLoginAttemptsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      