
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetDelegatedUsersResponse, GetDelegatedUsersQueryParams } from "../../models/UserDelegation/GetDelegatedUsers";

        export const getDelegatedUsersQueryKey = (params?: GetDelegatedUsersQueryParams) => [`/api/services/app/UserDelegation/GetDelegatedUsers`, ...(params ? [params] : [])] as const;
      

        export function getDelegatedUsersQueryOptions <TData = GetDelegatedUsersResponse>(params?: GetDelegatedUsersQueryParams): QueryOptions<TData> {
          const queryKey =getDelegatedUsersQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/UserDelegation/GetDelegatedUsers`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/UserDelegation/GetDelegatedUsers
*/
        export function useGetDelegatedUsers <TData = GetDelegatedUsersResponse, TError = unknown>(params?: GetDelegatedUsersQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getDelegatedUsersQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getDelegatedUsersQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      