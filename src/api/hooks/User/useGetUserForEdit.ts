
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserForEditResponse, GetUserForEditQueryParams } from "../../models/User/GetUserForEdit";

        export const getUserForEditQueryKey = (params?: GetUserForEditQueryParams) => [`/api/services/app/User/GetUserForEdit`, ...(params ? [params] : [])] as const;
      

        export function getUserForEditQueryOptions <TData = GetUserForEditResponse>(params?: GetUserForEditQueryParams): QueryOptions<TData> {
          const queryKey =getUserForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/User/GetUserForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/User/GetUserForEdit
*/
        export function useGetUserForEdit <TData = GetUserForEditResponse, TError = unknown>(params?: GetUserForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUserForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      