
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRecentlyUsedLinkedUsersResponse } from "../../models/UserLink/GetRecentlyUsedLinkedUsers";

        export const getRecentlyUsedLinkedUsersQueryKey = () => [`/api/services/app/UserLink/GetRecentlyUsedLinkedUsers`] as const;
      

      export function getRecentlyUsedLinkedUsersQueryOptions <TData = GetRecentlyUsedLinkedUsersResponse>(): QueryOptions<TData> {
        const queryKey =getRecentlyUsedLinkedUsersQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/UserLink/GetRecentlyUsedLinkedUsers`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/UserLink/GetRecentlyUsedLinkedUsers
*/
        export function useGetRecentlyUsedLinkedUsers <TData = GetRecentlyUsedLinkedUsersResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRecentlyUsedLinkedUsersQueryKey();

          const query = useQuery<TData, TError>({
            ...getRecentlyUsedLinkedUsersQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      