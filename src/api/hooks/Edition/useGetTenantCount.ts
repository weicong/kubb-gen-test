
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTenantCountResponse, GetTenantCountQueryParams } from "../../models/Edition/GetTenantCount";

        export const getTenantCountQueryKey = (params?: GetTenantCountQueryParams) => [`/api/services/app/Edition/GetTenantCount`, ...(params ? [params] : [])] as const;
      

        export function getTenantCountQueryOptions <TData = GetTenantCountResponse>(params?: GetTenantCountQueryParams): QueryOptions<TData> {
          const queryKey =getTenantCountQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Edition/GetTenantCount`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Edition/GetTenantCount
*/
        export function useGetTenantCount <TData = GetTenantCountResponse, TError = unknown>(params?: GetTenantCountQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTenantCountQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTenantCountQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      