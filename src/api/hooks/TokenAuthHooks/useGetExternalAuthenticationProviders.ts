import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetExternalAuthenticationProvidersResponse } from "../../models/TokenAuthModels/GetExternalAuthenticationProviders";


        export const getExternalAuthenticationProvidersQueryKey = () => [`/api/TokenAuth/GetExternalAuthenticationProviders`] as const;
      

      export function getExternalAuthenticationProvidersQueryOptions <TData = GetExternalAuthenticationProvidersResponse, TError = unknown>(): QueryOptions<TData, TError> {
        const queryKey =getExternalAuthenticationProvidersQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/TokenAuth/GetExternalAuthenticationProviders`
            });
          },
        };
      };
    

        /**
* @link /api/TokenAuth/GetExternalAuthenticationProviders
*/
        export function useGetExternalAuthenticationProviders <TData = GetExternalAuthenticationProvidersResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData, TError> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getExternalAuthenticationProvidersQueryKey();

          const query = useQuery<TData, TError>({
            ...getExternalAuthenticationProvidersQueryOptions<TData, TError>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      