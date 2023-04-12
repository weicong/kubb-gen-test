
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPaymentResponse, GetPaymentQueryParams } from "../../models/StripePayment/GetPayment";

        export const getPaymentQueryKey = (params?: GetPaymentQueryParams) => [`/api/services/app/StripePayment/GetPayment`, ...(params ? [params] : [])] as const;
      

        export function getPaymentQueryOptions <TData = GetPaymentResponse>(params?: GetPaymentQueryParams): QueryOptions<TData> {
          const queryKey =getPaymentQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/StripePayment/GetPayment`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/StripePayment/GetPayment
*/
        export function useGetPayment <TData = GetPaymentResponse, TError = unknown>(params?: GetPaymentQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPaymentQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getPaymentQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      