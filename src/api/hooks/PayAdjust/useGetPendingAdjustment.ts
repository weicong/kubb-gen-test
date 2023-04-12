
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPendingAdjustmentResponse, GetPendingAdjustmentQueryParams } from "../../models/PayAdjust/GetPendingAdjustment";

        export const getPendingAdjustmentQueryKey = (params?: GetPendingAdjustmentQueryParams) => [`/api/services/app/PayAdjust/GetPendingAdjustment`, ...(params ? [params] : [])] as const;
      

        export function getPendingAdjustmentQueryOptions <TData = GetPendingAdjustmentResponse>(params?: GetPendingAdjustmentQueryParams): QueryOptions<TData> {
          const queryKey =getPendingAdjustmentQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/PayAdjust/GetPendingAdjustment`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/PayAdjust/GetPendingAdjustment
*/
        export function useGetPendingAdjustment <TData = GetPendingAdjustmentResponse, TError = unknown>(params?: GetPendingAdjustmentQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPendingAdjustmentQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getPendingAdjustmentQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      