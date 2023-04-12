
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitUsersResponse, GetOrganizationUnitUsersQueryParams } from "../../models/OrganizationUnit/GetOrganizationUnitUsers";

        export const getOrganizationUnitUsersQueryKey = (params?: GetOrganizationUnitUsersQueryParams) => [`/api/services/app/OrganizationUnit/GetOrganizationUnitUsers`, ...(params ? [params] : [])] as const;
      

        export function getOrganizationUnitUsersQueryOptions <TData = GetOrganizationUnitUsersResponse>(params?: GetOrganizationUnitUsersQueryParams): QueryOptions<TData> {
          const queryKey =getOrganizationUnitUsersQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/OrganizationUnit/GetOrganizationUnitUsers`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnitUsers
*/
        export function useGetOrganizationUnitUsers <TData = GetOrganizationUnitUsersResponse, TError = unknown>(params?: GetOrganizationUnitUsersQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationUnitUsersQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getOrganizationUnitUsersQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      