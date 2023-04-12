
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTenantForEditResponse, GetTenantForEditQueryParams } from "../../models/Tenant/GetTenantForEdit";

        export const getTenantForEditQueryKey = (params?: GetTenantForEditQueryParams) => [`/api/services/app/Tenant/GetTenantForEdit`, ...(params ? [params] : [])] as const;
      

        export function getTenantForEditQueryOptions <TData = GetTenantForEditResponse>(params?: GetTenantForEditQueryParams): QueryOptions<TData> {
          const queryKey =getTenantForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Tenant/GetTenantForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Tenant/GetTenantForEdit
*/
        export function useGetTenantForEdit <TData = GetTenantForEditResponse, TError = unknown>(params?: GetTenantForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTenantForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTenantForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      