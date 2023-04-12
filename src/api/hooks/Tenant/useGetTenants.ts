
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTenantsResponse, GetTenantsQueryParams } from "../../models/Tenant/GetTenants";

        export const getTenantsQueryKey = (params?: GetTenantsQueryParams) => [`/api/services/app/Tenant/GetTenants`, ...(params ? [params] : [])] as const;
      

        export function getTenantsQueryOptions <TData = GetTenantsResponse>(params?: GetTenantsQueryParams): QueryOptions<TData> {
          const queryKey =getTenantsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Tenant/GetTenants`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Tenant/GetTenants
*/
        export function useGetTenants <TData = GetTenantsResponse, TError = unknown>(params?: GetTenantsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTenantsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTenantsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      