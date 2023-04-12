
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserPermissionsForEditResponse, GetUserPermissionsForEditQueryParams } from "../../models/User/GetUserPermissionsForEdit";

        export const getUserPermissionsForEditQueryKey = (params?: GetUserPermissionsForEditQueryParams) => [`/api/services/app/User/GetUserPermissionsForEdit`, ...(params ? [params] : [])] as const;
      

        export function getUserPermissionsForEditQueryOptions <TData = GetUserPermissionsForEditResponse>(params?: GetUserPermissionsForEditQueryParams): QueryOptions<TData> {
          const queryKey =getUserPermissionsForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/User/GetUserPermissionsForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/User/GetUserPermissionsForEdit
*/
        export function useGetUserPermissionsForEdit <TData = GetUserPermissionsForEditResponse, TError = unknown>(params?: GetUserPermissionsForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserPermissionsForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUserPermissionsForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      