
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPaymentInfoResponse, GetPaymentInfoQueryParams } from "../../models/Payment/GetPaymentInfo";

        export const getPaymentInfoQueryKey = (params?: GetPaymentInfoQueryParams) => [`/api/services/app/Payment/GetPaymentInfo`, ...(params ? [params] : [])] as const;
      

        export function getPaymentInfoQueryOptions <TData = GetPaymentInfoResponse>(params?: GetPaymentInfoQueryParams): QueryOptions<TData> {
          const queryKey =getPaymentInfoQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Payment/GetPaymentInfo`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Payment/GetPaymentInfo
*/
        export function useGetPaymentInfo <TData = GetPaymentInfoResponse, TError = unknown>(params?: GetPaymentInfoQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPaymentInfoQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getPaymentInfoQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      