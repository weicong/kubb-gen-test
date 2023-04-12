
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUsersResponse, GetUsersQueryParams } from "../../models/User/GetUsers";

        export const getUsersQueryKey = (params?: GetUsersQueryParams) => [`/api/services/app/User/GetUsers`, ...(params ? [params] : [])] as const;
      

        export function getUsersQueryOptions <TData = GetUsersResponse>(params?: GetUsersQueryParams): QueryOptions<TData> {
          const queryKey =getUsersQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/User/GetUsers`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/User/GetUsers
*/
        export function useGetUsers <TData = GetUsersResponse, TError = unknown>(params?: GetUsersQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUsersQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUsersQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      