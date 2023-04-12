
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetActiveUserDelegationsResponse } from "../../models/UserDelegation/GetActiveUserDelegations";

        export const getActiveUserDelegationsQueryKey = () => [`/api/services/app/UserDelegation/GetActiveUserDelegations`] as const;
      

      export function getActiveUserDelegationsQueryOptions <TData = GetActiveUserDelegationsResponse>(): QueryOptions<TData> {
        const queryKey =getActiveUserDelegationsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/UserDelegation/GetActiveUserDelegations`
            });
          },
        };
      };
    

        /**
* @summary Returns active user delegations for current user
* @link /api/services/app/UserDelegation/GetActiveUserDelegations
*/
        export function useGetActiveUserDelegations <TData = GetActiveUserDelegationsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getActiveUserDelegationsQueryKey();

          const query = useQuery<TData, TError>({
            ...getActiveUserDelegationsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      