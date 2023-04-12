
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetActiveGatewaysResponse, GetActiveGatewaysQueryParams } from "../../models/Payment/GetActiveGateways";

        export const getActiveGatewaysQueryKey = (params?: GetActiveGatewaysQueryParams) => [`/api/services/app/Payment/GetActiveGateways`, ...(params ? [params] : [])] as const;
      

        export function getActiveGatewaysQueryOptions <TData = GetActiveGatewaysResponse>(params?: GetActiveGatewaysQueryParams): QueryOptions<TData> {
          const queryKey =getActiveGatewaysQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Payment/GetActiveGateways`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Payment/GetActiveGateways
*/
        export function useGetActiveGateways <TData = GetActiveGatewaysResponse, TError = unknown>(params?: GetActiveGatewaysQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getActiveGatewaysQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getActiveGatewaysQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      