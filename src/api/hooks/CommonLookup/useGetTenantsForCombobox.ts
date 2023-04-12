
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTenantsForComboboxResponse } from "../../models/CommonLookup/GetTenantsForCombobox";

        export const getTenantsForComboboxQueryKey = () => [`/api/services/app/CommonLookup/GetTenantsForCombobox`] as const;
      

      export function getTenantsForComboboxQueryOptions <TData = GetTenantsForComboboxResponse>(): QueryOptions<TData> {
        const queryKey =getTenantsForComboboxQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/CommonLookup/GetTenantsForCombobox`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/CommonLookup/GetTenantsForCombobox
*/
        export function useGetTenantsForCombobox <TData = GetTenantsForComboboxResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTenantsForComboboxQueryKey();

          const query = useQuery<TData, TError>({
            ...getTenantsForComboboxQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      