
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetGroupedListResponse, GetGroupedListQueryParams } from "../../models/PurchasePackageItem/GetGroupedList";

        export const getGroupedListQueryKey = (params?: GetGroupedListQueryParams) => [`/api/services/app/PurchasePackageItem/GetGroupedList`, ...(params ? [params] : [])] as const;
      

        export function getGroupedListQueryOptions <TData = GetGroupedListResponse>(params?: GetGroupedListQueryParams): QueryOptions<TData> {
          const queryKey =getGroupedListQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/PurchasePackageItem/GetGroupedList`,
                params
              });
            },
          };
        };
      

        /**
* @summary 按支出科目/项目分组
* @link /api/services/app/PurchasePackageItem/GetGroupedList
*/
        export function useGetGroupedList <TData = GetGroupedListResponse, TError = unknown>(params?: GetGroupedListQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getGroupedListQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getGroupedListQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      