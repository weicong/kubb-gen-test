
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAuditLogsResponse, GetAuditLogsQueryParams } from "../../models/AuditLog/GetAuditLogs";

        export const getAuditLogsQueryKey = (params?: GetAuditLogsQueryParams) => [`/api/services/app/AuditLog/GetAuditLogs`, ...(params ? [params] : [])] as const;
      

        export function getAuditLogsQueryOptions <TData = GetAuditLogsResponse>(params?: GetAuditLogsQueryParams): QueryOptions<TData> {
          const queryKey =getAuditLogsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetAuditLogs`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetAuditLogs
*/
        export function useGetAuditLogs <TData = GetAuditLogsResponse, TError = unknown>(params?: GetAuditLogsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAuditLogsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAuditLogsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      