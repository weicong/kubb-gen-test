
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { TestNotificationResponse, TestNotificationQueryParams } from "../../models/TokenAuth/TestNotification";

        export const testNotificationQueryKey = (params?: TestNotificationQueryParams) => [`/api/TokenAuth/TestNotification`, ...(params ? [params] : [])] as const;
      

        export function testNotificationQueryOptions <TData = TestNotificationResponse>(params?: TestNotificationQueryParams): QueryOptions<TData> {
          const queryKey =testNotificationQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/TokenAuth/TestNotification`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/TokenAuth/TestNotification
*/
        export function useTestNotification <TData = TestNotificationResponse, TError = unknown>(params?: TestNotificationQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? testNotificationQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...testNotificationQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      