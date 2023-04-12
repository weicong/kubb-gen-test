
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetFriendProfilePictureResponse, GetFriendProfilePictureQueryParams } from "../../models/Profile/GetFriendProfilePicture";

        export const getFriendProfilePictureQueryKey = (params?: GetFriendProfilePictureQueryParams) => [`/api/services/app/Profile/GetFriendProfilePicture`, ...(params ? [params] : [])] as const;
      

        export function getFriendProfilePictureQueryOptions <TData = GetFriendProfilePictureResponse>(params?: GetFriendProfilePictureQueryParams): QueryOptions<TData> {
          const queryKey =getFriendProfilePictureQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Profile/GetFriendProfilePicture`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Profile/GetFriendProfilePicture
*/
        export function useGetFriendProfilePicture <TData = GetFriendProfilePictureResponse, TError = unknown>(params?: GetFriendProfilePictureQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getFriendProfilePictureQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getFriendProfilePictureQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      