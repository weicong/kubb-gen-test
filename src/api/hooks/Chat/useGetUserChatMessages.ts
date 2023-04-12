
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserChatMessagesResponse, GetUserChatMessagesQueryParams } from "../../models/Chat/GetUserChatMessages";

        export const getUserChatMessagesQueryKey = (params?: GetUserChatMessagesQueryParams) => [`/api/services/app/Chat/GetUserChatMessages`, ...(params ? [params] : [])] as const;
      

        export function getUserChatMessagesQueryOptions <TData = GetUserChatMessagesResponse>(params?: GetUserChatMessagesQueryParams): QueryOptions<TData> {
          const queryKey =getUserChatMessagesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Chat/GetUserChatMessages`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Chat/GetUserChatMessages
*/
        export function useGetUserChatMessages <TData = GetUserChatMessagesResponse, TError = unknown>(params?: GetUserChatMessagesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserChatMessagesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getUserChatMessagesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      