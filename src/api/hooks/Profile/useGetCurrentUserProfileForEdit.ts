
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetCurrentUserProfileForEditResponse } from "../../models/Profile/GetCurrentUserProfileForEdit";

        export const getCurrentUserProfileForEditQueryKey = () => [`/api/services/app/Profile/GetCurrentUserProfileForEdit`] as const;
      

      export function getCurrentUserProfileForEditQueryOptions <TData = GetCurrentUserProfileForEditResponse>(): QueryOptions<TData> {
        const queryKey =getCurrentUserProfileForEditQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Profile/GetCurrentUserProfileForEdit`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Profile/GetCurrentUserProfileForEdit
*/
        export function useGetCurrentUserProfileForEdit <TData = GetCurrentUserProfileForEditResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getCurrentUserProfileForEditQueryKey();

          const query = useQuery<TData, TError>({
            ...getCurrentUserProfileForEditQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      