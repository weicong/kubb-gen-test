
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPaymentResultResponse, GetPaymentResultQueryParams } from "../../models/StripePayment/GetPaymentResult";

        export const getPaymentResultQueryKey = (params?: GetPaymentResultQueryParams) => [`/api/services/app/StripePayment/GetPaymentResult`, ...(params ? [params] : [])] as const;
      

        export function getPaymentResultQueryOptions <TData = GetPaymentResultResponse>(params?: GetPaymentResultQueryParams): QueryOptions<TData> {
          const queryKey =getPaymentResultQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/StripePayment/GetPaymentResult`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/StripePayment/GetPaymentResult
*/
        export function useGetPaymentResult <TData = GetPaymentResultResponse, TError = unknown>(params?: GetPaymentResultQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPaymentResultQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getPaymentResultQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      