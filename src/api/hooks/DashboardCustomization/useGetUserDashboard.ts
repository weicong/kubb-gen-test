
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserDashboardResponse, GetUserDashboardQueryParams } from "../../models/DashboardCustomization/GetUserDashboard";

        export const getUserDashboardQueryKey = (params?: GetUserDashboardQueryParams) => [`/api/services/app/DashboardCustomization/GetUserDashboard`, ...(params ? [params] : [])] as const;
      

        export function getUserDashboardQueryOptions <TData = GetUserDashboardResponse>(params?: GetUserDashboardQueryParams): QueryOptions<TData> {
          const queryKey =getUserDashboardQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/DashboardCustomization/GetUserDashboard`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/DashboardCustomization/GetUserDashboard
*/
        export function useGetUserDashboard <TData = GetUserDashboardResponse, TError = unknown>(params?: GetUserDashboardQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserDashboardQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUserDashboardQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      