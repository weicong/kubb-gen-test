
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionsForComboboxResponse, GetEditionsForComboboxQueryParams } from "../../models/CommonLookup/GetEditionsForCombobox";

        export const getEditionsForComboboxQueryKey = (params?: GetEditionsForComboboxQueryParams) => [`/api/services/app/CommonLookup/GetEditionsForCombobox`, ...(params ? [params] : [])] as const;
      

        export function getEditionsForComboboxQueryOptions <TData = GetEditionsForComboboxResponse>(params?: GetEditionsForComboboxQueryParams): QueryOptions<TData> {
          const queryKey =getEditionsForComboboxQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/CommonLookup/GetEditionsForCombobox`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/CommonLookup/GetEditionsForCombobox
*/
        export function useGetEditionsForCombobox <TData = GetEditionsForComboboxResponse, TError = unknown>(params?: GetEditionsForComboboxQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionsForComboboxQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEditionsForComboboxQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      