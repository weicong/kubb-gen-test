
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTimezoneComboboxItemsResponse, GetTimezoneComboboxItemsQueryParams } from "../../models/Timing/GetTimezoneComboboxItems";

        export const getTimezoneComboboxItemsQueryKey = (params?: GetTimezoneComboboxItemsQueryParams) => [`/api/services/app/Timing/GetTimezoneComboboxItems`, ...(params ? [params] : [])] as const;
      

        export function getTimezoneComboboxItemsQueryOptions <TData = GetTimezoneComboboxItemsResponse>(params?: GetTimezoneComboboxItemsQueryParams): QueryOptions<TData> {
          const queryKey =getTimezoneComboboxItemsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Timing/GetTimezoneComboboxItems`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Timing/GetTimezoneComboboxItems
*/
        export function useGetTimezoneComboboxItems <TData = GetTimezoneComboboxItemsResponse, TError = unknown>(params?: GetTimezoneComboboxItemsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTimezoneComboboxItemsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTimezoneComboboxItemsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      