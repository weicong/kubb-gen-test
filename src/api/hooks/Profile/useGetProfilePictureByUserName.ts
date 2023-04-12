
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetProfilePictureByUserNameResponse, GetProfilePictureByUserNameQueryParams } from "../../models/Profile/GetProfilePictureByUserName";

        export const getProfilePictureByUserNameQueryKey = (params?: GetProfilePictureByUserNameQueryParams) => [`/api/services/app/Profile/GetProfilePictureByUserName`, ...(params ? [params] : [])] as const;
      

        export function getProfilePictureByUserNameQueryOptions <TData = GetProfilePictureByUserNameResponse>(params?: GetProfilePictureByUserNameQueryParams): QueryOptions<TData> {
          const queryKey =getProfilePictureByUserNameQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Profile/GetProfilePictureByUserName`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Profile/GetProfilePictureByUserName
*/
        export function useGetProfilePictureByUserName <TData = GetProfilePictureByUserNameResponse, TError = unknown>(params?: GetProfilePictureByUserNameQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getProfilePictureByUserNameQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getProfilePictureByUserNameQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      