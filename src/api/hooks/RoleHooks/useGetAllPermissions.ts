import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllPermissionsResponse } from "../../models/RoleModels/GetAllPermissions";


        export const getAllPermissionsQueryKey = () => [`/api/services/app/Role/GetAllPermissions`] as const;
      

      export function getAllPermissionsQueryOptions <TData = GetAllPermissionsResponse, TError = unknown>(): QueryOptions<TData, TError> {
        const queryKey =getAllPermissionsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Role/GetAllPermissions`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Role/GetAllPermissions
*/
        export function useGetAllPermissions <TData = GetAllPermissionsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData, TError> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllPermissionsQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllPermissionsQueryOptions<TData, TError>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      