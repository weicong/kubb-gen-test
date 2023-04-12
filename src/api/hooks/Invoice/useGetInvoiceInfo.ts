
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetInvoiceInfoResponse, GetInvoiceInfoQueryParams } from "../../models/Invoice/GetInvoiceInfo";

        export const getInvoiceInfoQueryKey = (params?: GetInvoiceInfoQueryParams) => [`/api/services/app/Invoice/GetInvoiceInfo`, ...(params ? [params] : [])] as const;
      

        export function getInvoiceInfoQueryOptions <TData = GetInvoiceInfoResponse>(params?: GetInvoiceInfoQueryParams): QueryOptions<TData> {
          const queryKey =getInvoiceInfoQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Invoice/GetInvoiceInfo`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Invoice/GetInvoiceInfo
*/
        export function useGetInvoiceInfo <TData = GetInvoiceInfoResponse, TError = unknown>(params?: GetInvoiceInfoQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getInvoiceInfoQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getInvoiceInfoQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      