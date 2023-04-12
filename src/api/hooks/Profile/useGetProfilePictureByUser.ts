
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetProfilePictureByUserResponse, GetProfilePictureByUserQueryParams } from "../../models/Profile/GetProfilePictureByUser";

        export const getProfilePictureByUserQueryKey = (params?: GetProfilePictureByUserQueryParams) => [`/api/services/app/Profile/GetProfilePictureByUser`, ...(params ? [params] : [])] as const;
      

        export function getProfilePictureByUserQueryOptions <TData = GetProfilePictureByUserResponse>(params?: GetProfilePictureByUserQueryParams): QueryOptions<TData> {
          const queryKey =getProfilePictureByUserQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Profile/GetProfilePictureByUser`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Profile/GetProfilePictureByUser
*/
        export function useGetProfilePictureByUser <TData = GetProfilePictureByUserResponse, TError = unknown>(params?: GetProfilePictureByUserQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getProfilePictureByUserQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getProfilePictureByUserQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      