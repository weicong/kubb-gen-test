
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetConfigurationResponse } from "../../models/PayPalPayment/GetConfiguration";

        export const getConfigurationQueryKey = () => [`/api/services/app/PayPalPayment/GetConfiguration`] as const;
      

      export function getConfigurationQueryOptions <TData = GetConfigurationResponse>(): QueryOptions<TData> {
        const queryKey =getConfigurationQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/PayPalPayment/GetConfiguration`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/PayPalPayment/GetConfiguration
*/
        export function useGetConfiguration <TData = GetConfigurationResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getConfigurationQueryKey();

          const query = useQuery<TData, TError>({
            ...getConfigurationQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      