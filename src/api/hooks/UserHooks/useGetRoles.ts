
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetRolesResponse } from "../../models/UserModels/GetRoles";

        export const getRolesQueryKey = () => [`/api/services/app/User/GetRoles`] as const;
      

      export function getRolesQueryOptions <TData = GetRolesResponse>(): QueryOptions<TData> {
        const queryKey =getRolesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/User/GetRoles`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/User/GetRoles
*/
        export function useGetRoles <TData = GetRolesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getRolesQueryKey();

          const query = useQuery<TData, TError>({
            ...getRolesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      