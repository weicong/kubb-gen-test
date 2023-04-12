
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserNotificationsResponse, GetUserNotificationsQueryParams } from "../../models/Notification/GetUserNotifications";

        export const getUserNotificationsQueryKey = (params?: GetUserNotificationsQueryParams) => [`/api/services/app/Notification/GetUserNotifications`, ...(params ? [params] : [])] as const;
      

        export function getUserNotificationsQueryOptions <TData = GetUserNotificationsResponse>(params?: GetUserNotificationsQueryParams): QueryOptions<TData> {
          const queryKey =getUserNotificationsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Notification/GetUserNotifications`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Notification/GetUserNotifications
*/
        export function useGetUserNotifications <TData = GetUserNotificationsResponse, TError = unknown>(params?: GetUserNotificationsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserNotificationsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUserNotificationsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      