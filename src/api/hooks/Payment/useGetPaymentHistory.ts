
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPaymentHistoryResponse, GetPaymentHistoryQueryParams } from "../../models/Payment/GetPaymentHistory";

        export const getPaymentHistoryQueryKey = (params?: GetPaymentHistoryQueryParams) => [`/api/services/app/Payment/GetPaymentHistory`, ...(params ? [params] : [])] as const;
      

        export function getPaymentHistoryQueryOptions <TData = GetPaymentHistoryResponse>(params?: GetPaymentHistoryQueryParams): QueryOptions<TData> {
          const queryKey =getPaymentHistoryQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Payment/GetPaymentHistory`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Payment/GetPaymentHistory
*/
        export function useGetPaymentHistory <TData = GetPaymentHistoryResponse, TError = unknown>(params?: GetPaymentHistoryQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPaymentHistoryQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getPaymentHistoryQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      