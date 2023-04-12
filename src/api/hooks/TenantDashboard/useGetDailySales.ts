
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetDailySalesResponse } from "../../models/TenantDashboard/GetDailySales";

        export const getDailySalesQueryKey = () => [`/api/services/app/TenantDashboard/GetDailySales`] as const;
      

      export function getDailySalesQueryOptions <TData = GetDailySalesResponse>(): QueryOptions<TData> {
        const queryKey =getDailySalesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/TenantDashboard/GetDailySales`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/TenantDashboard/GetDailySales
*/
        export function useGetDailySales <TData = GetDailySalesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getDailySalesQueryKey();

          const query = useQuery<TData, TError>({
            ...getDailySalesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      