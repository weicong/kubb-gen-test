
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitRolesResponse, GetOrganizationUnitRolesQueryParams } from "../../models/OrganizationUnit/GetOrganizationUnitRoles";

        export const getOrganizationUnitRolesQueryKey = (params?: GetOrganizationUnitRolesQueryParams) => [`/api/services/app/OrganizationUnit/GetOrganizationUnitRoles`, ...(params ? [params] : [])] as const;
      

        export function getOrganizationUnitRolesQueryOptions <TData = GetOrganizationUnitRolesResponse>(params?: GetOrganizationUnitRolesQueryParams): QueryOptions<TData> {
          const queryKey =getOrganizationUnitRolesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/OrganizationUnit/GetOrganizationUnitRoles`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnitRoles
*/
        export function useGetOrganizationUnitRoles <TData = GetOrganizationUnitRolesResponse, TError = unknown>(params?: GetOrganizationUnitRolesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationUnitRolesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getOrganizationUnitRolesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      