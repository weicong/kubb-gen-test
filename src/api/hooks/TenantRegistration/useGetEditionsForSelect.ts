
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionsForSelectResponse } from "../../models/TenantRegistration/GetEditionsForSelect";

        export const getEditionsForSelectQueryKey = () => [`/api/services/app/TenantRegistration/GetEditionsForSelect`] as const;
      

      export function getEditionsForSelectQueryOptions <TData = GetEditionsForSelectResponse>(): QueryOptions<TData> {
        const queryKey =getEditionsForSelectQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantRegistration/GetEditionsForSelect`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantRegistration/GetEditionsForSelect
*/
        export function useGetEditionsForSelect <TData = GetEditionsForSelectResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionsForSelectQueryKey();

          const query = useQuery<TData, TError>({
            ...getEditionsForSelectQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      