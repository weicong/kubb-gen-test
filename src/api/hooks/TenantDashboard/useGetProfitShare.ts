
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetProfitShareResponse } from "../../models/TenantDashboard/GetProfitShare";

        export const getProfitShareQueryKey = () => [`/api/services/app/TenantDashboard/GetProfitShare`] as const;
      

      export function getProfitShareQueryOptions <TData = GetProfitShareResponse>(): QueryOptions<TData> {
        const queryKey =getProfitShareQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetProfitShare`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetProfitShare
*/
        export function useGetProfitShare <TData = GetProfitShareResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getProfitShareQueryKey();

          const query = useQuery<TData, TError>({
            ...getProfitShareQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      