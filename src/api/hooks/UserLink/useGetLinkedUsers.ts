
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLinkedUsersResponse, GetLinkedUsersQueryParams } from "../../models/UserLink/GetLinkedUsers";

        export const getLinkedUsersQueryKey = (params?: GetLinkedUsersQueryParams) => [`/api/services/app/UserLink/GetLinkedUsers`, ...(params ? [params] : [])] as const;
      

        export function getLinkedUsersQueryOptions <TData = GetLinkedUsersResponse>(params?: GetLinkedUsersQueryParams): QueryOptions<TData> {
          const queryKey =getLinkedUsersQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/UserLink/GetLinkedUsers`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/UserLink/GetLinkedUsers
*/
        export function useGetLinkedUsers <TData = GetLinkedUsersResponse, TError = unknown>(params?: GetLinkedUsersQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLinkedUsersQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getLinkedUsersQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      