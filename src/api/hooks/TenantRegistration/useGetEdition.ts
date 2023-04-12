
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionResponse, GetEditionQueryParams } from "../../models/TenantRegistration/GetEdition";

        export const getEditionQueryKey = (params?: GetEditionQueryParams) => [`/api/services/app/TenantRegistration/GetEdition`, ...(params ? [params] : [])] as const;
      

        export function getEditionQueryOptions <TData = GetEditionResponse>(params?: GetEditionQueryParams): QueryOptions<TData> {
          const queryKey =getEditionQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/TenantRegistration/GetEdition`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/TenantRegistration/GetEdition
*/
        export function useGetEdition <TData = GetEditionResponse, TError = unknown>(params?: GetEditionQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEditionQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      