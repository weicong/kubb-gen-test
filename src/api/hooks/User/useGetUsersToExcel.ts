
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUsersToExcelResponse, GetUsersToExcelQueryParams } from "../../models/User/GetUsersToExcel";

        export const getUsersToExcelQueryKey = (params?: GetUsersToExcelQueryParams) => [`/api/services/app/User/GetUsersToExcel`, ...(params ? [params] : [])] as const;
      

        export function getUsersToExcelQueryOptions <TData = GetUsersToExcelResponse>(params?: GetUsersToExcelQueryParams): QueryOptions<TData> {
          const queryKey =getUsersToExcelQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/User/GetUsersToExcel`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/User/GetUsersToExcel
*/
        export function useGetUsersToExcel <TData = GetUsersToExcelResponse, TError = unknown>(params?: GetUsersToExcelQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUsersToExcelQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUsersToExcelQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      