
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetMemberActivityResponse } from "../../models/TenantDashboard/GetMemberActivity";

        export const getMemberActivityQueryKey = () => [`/api/services/app/TenantDashboard/GetMemberActivity`] as const;
      

      export function getMemberActivityQueryOptions <TData = GetMemberActivityResponse>(): QueryOptions<TData> {
        const queryKey =getMemberActivityQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetMemberActivity`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetMemberActivity
*/
        export function useGetMemberActivity <TData = GetMemberActivityResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getMemberActivityQueryKey();

          const query = useQuery<TData, TError>({
            ...getMemberActivityQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      