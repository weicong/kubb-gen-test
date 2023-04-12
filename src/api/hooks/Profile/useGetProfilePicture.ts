
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetProfilePictureResponse } from "../../models/Profile/GetProfilePicture";

        export const getProfilePictureQueryKey = () => [`/api/services/app/Profile/GetProfilePicture`] as const;
      

      export function getProfilePictureQueryOptions <TData = GetProfilePictureResponse>(): QueryOptions<TData> {
        const queryKey =getProfilePictureQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Profile/GetProfilePicture`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Profile/GetProfilePicture
*/
        export function useGetProfilePicture <TData = GetProfilePictureResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getProfilePictureQueryKey();

          const query = useQuery<TData, TError>({
            ...getProfilePictureQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      