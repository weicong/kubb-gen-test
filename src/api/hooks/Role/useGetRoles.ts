
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRolesResponse, GetRolesQueryParams } from "../../models/Role/GetRoles";

        export const getRolesQueryKey = (params?: GetRolesQueryParams) => [`/api/services/app/Role/GetRoles`, ...(params ? [params] : [])] as const;
      

        export function getRolesQueryOptions <TData = GetRolesResponse>(params?: GetRolesQueryParams): QueryOptions<TData> {
          const queryKey =getRolesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Role/GetRoles`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Role/GetRoles
*/
        export function useGetRoles <TData = GetRolesResponse, TError = unknown>(params?: GetRolesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRolesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getRolesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      