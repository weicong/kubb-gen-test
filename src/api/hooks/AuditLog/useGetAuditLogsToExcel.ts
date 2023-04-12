
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAuditLogsToExcelResponse, GetAuditLogsToExcelQueryParams } from "../../models/AuditLog/GetAuditLogsToExcel";

        export const getAuditLogsToExcelQueryKey = (params?: GetAuditLogsToExcelQueryParams) => [`/api/services/app/AuditLog/GetAuditLogsToExcel`, ...(params ? [params] : [])] as const;
      

        export function getAuditLogsToExcelQueryOptions <TData = GetAuditLogsToExcelResponse>(params?: GetAuditLogsToExcelQueryParams): QueryOptions<TData> {
          const queryKey =getAuditLogsToExcelQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetAuditLogsToExcel`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetAuditLogsToExcel
*/
        export function useGetAuditLogsToExcel <TData = GetAuditLogsToExcelResponse, TError = unknown>(params?: GetAuditLogsToExcelQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAuditLogsToExcelQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAuditLogsToExcelQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      