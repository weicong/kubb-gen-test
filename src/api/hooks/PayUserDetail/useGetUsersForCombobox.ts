
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUsersForComboboxResponse, GetUsersForComboboxQueryParams } from "../../models/PayUserDetail/GetUsersForCombobox";

        export const getUsersForComboboxQueryKey = (params?: GetUsersForComboboxQueryParams) => [`/api/services/app/PayUserDetail/GetUsersForCombobox`, ...(params ? [params] : [])] as const;
      

        export function getUsersForComboboxQueryOptions <TData = GetUsersForComboboxResponse>(params?: GetUsersForComboboxQueryParams): QueryOptions<TData> {
          const queryKey =getUsersForComboboxQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/PayUserDetail/GetUsersForCombobox`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/PayUserDetail/GetUsersForCombobox
*/
        export function useGetUsersForCombobox <TData = GetUsersForComboboxResponse, TError = unknown>(params?: GetUsersForComboboxQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUsersForComboboxQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUsersForComboboxQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      