
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllPermissionsResponse } from "../../models/Permission/GetAllPermissions";

        export const getAllPermissionsQueryKey = () => [`/api/services/app/Permission/GetAllPermissions`] as const;
      

      export function getAllPermissionsQueryOptions <TData = GetAllPermissionsResponse>(): QueryOptions<TData> {
        const queryKey =getAllPermissionsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Permission/GetAllPermissions`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Permission/GetAllPermissions
*/
        export function useGetAllPermissions <TData = GetAllPermissionsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllPermissionsQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllPermissionsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      