
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRoleForEditResponse, GetRoleForEditQueryParams } from "../../models/RoleModels/GetRoleForEdit";

        export const getRoleForEditQueryKey = (params?: GetRoleForEditQueryParams) => [`/api/services/app/Role/GetRoleForEdit`, ...(params ? [params] : [])] as const;
      

        export function getRoleForEditQueryOptions <TData = GetRoleForEditResponse>(params?: GetRoleForEditQueryParams): QueryOptions<TData> {
          const queryKey =getRoleForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Role/GetRoleForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Role/GetRoleForEdit
*/
        export function useGetRoleForEdit <TData = GetRoleForEditResponse, TError = unknown>(params?: GetRoleForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRoleForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getRoleForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      