
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLastCompletedPaymentResponse } from "../../models/Payment/GetLastCompletedPayment";

        export const getLastCompletedPaymentQueryKey = () => [`/api/services/app/Payment/GetLastCompletedPayment`] as const;
      

      export function getLastCompletedPaymentQueryOptions <TData = GetLastCompletedPaymentResponse>(): QueryOptions<TData> {
        const queryKey =getLastCompletedPaymentQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Payment/GetLastCompletedPayment`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Payment/GetLastCompletedPayment
*/
        export function useGetLastCompletedPayment <TData = GetLastCompletedPaymentResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLastCompletedPaymentQueryKey();

          const query = useQuery<TData, TError>({
            ...getLastCompletedPaymentQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      