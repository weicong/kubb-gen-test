
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetNotificationSettingsResponse } from "../../models/Notification/GetNotificationSettings";

        export const getNotificationSettingsQueryKey = () => [`/api/services/app/Notification/GetNotificationSettings`] as const;
      

      export function getNotificationSettingsQueryOptions <TData = GetNotificationSettingsResponse>(): QueryOptions<TData> {
        const queryKey =getNotificationSettingsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Notification/GetNotificationSettings`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Notification/GetNotificationSettings
*/
        export function useGetNotificationSettings <TData = GetNotificationSettingsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getNotificationSettingsQueryKey();

          const query = useQuery<TData, TError>({
            ...getNotificationSettingsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      