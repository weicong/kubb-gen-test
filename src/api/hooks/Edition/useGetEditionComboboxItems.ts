
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionComboboxItemsResponse, GetEditionComboboxItemsQueryParams } from "../../models/Edition/GetEditionComboboxItems";

        export const getEditionComboboxItemsQueryKey = (params?: GetEditionComboboxItemsQueryParams) => [`/api/services/app/Edition/GetEditionComboboxItems`, ...(params ? [params] : [])] as const;
      

        export function getEditionComboboxItemsQueryOptions <TData = GetEditionComboboxItemsResponse>(params?: GetEditionComboboxItemsQueryParams): QueryOptions<TData> {
          const queryKey =getEditionComboboxItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Edition/GetEditionComboboxItems`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Edition/GetEditionComboboxItems
*/
        export function useGetEditionComboboxItems <TData = GetEditionComboboxItemsResponse, TError = unknown>(params?: GetEditionComboboxItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionComboboxItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEditionComboboxItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      