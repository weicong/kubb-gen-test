
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetSalesSummaryResponse, GetSalesSummaryQueryParams } from "../../models/TenantDashboard/GetSalesSummary";

        export const getSalesSummaryQueryKey = (params?: GetSalesSummaryQueryParams) => [`/api/services/app/TenantDashboard/GetSalesSummary`, ...(params ? [params] : [])] as const;
      

        export function getSalesSummaryQueryOptions <TData = GetSalesSummaryResponse>(params?: GetSalesSummaryQueryParams): QueryOptions<TData> {
          const queryKey =getSalesSummaryQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/TenantDashboard/GetSalesSummary`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/TenantDashboard/GetSalesSummary
*/
        export function useGetSalesSummary <TData = GetSalesSummaryResponse, TError = unknown>(params?: GetSalesSummaryQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getSalesSummaryQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getSalesSummaryQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      