
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsForComboboxResponse, GetOrganizationUnitsForComboboxQueryParams } from "../../models/PayUserDetail/GetOrganizationUnitsForCombobox";

        export const getOrganizationUnitsForComboboxQueryKey = (params?: GetOrganizationUnitsForComboboxQueryParams) => [`/api/services/app/PayUserDetail/GetOrganizationUnitsForCombobox`, ...(params ? [params] : [])] as const;
      

        export function getOrganizationUnitsForComboboxQueryOptions <TData = GetOrganizationUnitsForComboboxResponse>(params?: GetOrganizationUnitsForComboboxQueryParams): QueryOptions<TData> {
          const queryKey =getOrganizationUnitsForComboboxQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/PayUserDetail/GetOrganizationUnitsForCombobox`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/PayUserDetail/GetOrganizationUnitsForCombobox
*/
        export function useGetOrganizationUnitsForCombobox <TData = GetOrganizationUnitsForComboboxResponse, TError = unknown>(params?: GetOrganizationUnitsForComboboxQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationUnitsForComboboxQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getOrganizationUnitsForComboboxQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      