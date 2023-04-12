
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRoleUsersResponse, GetRoleUsersQueryParams } from "../../models/RoleUsers/GetRoleUsers";

        export const getRoleUsersQueryKey = (params?: GetRoleUsersQueryParams) => [`/api/services/app/RoleUsers/GetRoleUsers`, ...(params ? [params] : [])] as const;
      

        export function getRoleUsersQueryOptions <TData = GetRoleUsersResponse>(params?: GetRoleUsersQueryParams): QueryOptions<TData> {
          const queryKey =getRoleUsersQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/RoleUsers/GetRoleUsers`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/RoleUsers/GetRoleUsers
*/
        export function useGetRoleUsers <TData = GetRoleUsersResponse, TError = unknown>(params?: GetRoleUsersQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRoleUsersQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getRoleUsersQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      