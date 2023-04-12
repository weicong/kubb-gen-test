
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUserChatFriendsWithSettingsResponse } from "../../models/Chat/GetUserChatFriendsWithSettings";

        export const getUserChatFriendsWithSettingsQueryKey = () => [`/api/services/app/Chat/GetUserChatFriendsWithSettings`] as const;
      

      export function getUserChatFriendsWithSettingsQueryOptions <TData = GetUserChatFriendsWithSettingsResponse>(): QueryOptions<TData> {
        const queryKey =getUserChatFriendsWithSettingsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Chat/GetUserChatFriendsWithSettings`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Chat/GetUserChatFriendsWithSettings
*/
        export function useGetUserChatFriendsWithSettings <TData = GetUserChatFriendsWithSettingsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUserChatFriendsWithSettingsQueryKey();

          const query = useQuery<TData, TError>({
            ...getUserChatFriendsWithSettingsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      