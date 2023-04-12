
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEntityChangesToExcelResponse, GetEntityChangesToExcelQueryParams } from "../../models/AuditLog/GetEntityChangesToExcel";

        export const getEntityChangesToExcelQueryKey = (params?: GetEntityChangesToExcelQueryParams) => [`/api/services/app/AuditLog/GetEntityChangesToExcel`, ...(params ? [params] : [])] as const;
      

        export function getEntityChangesToExcelQueryOptions <TData = GetEntityChangesToExcelResponse>(params?: GetEntityChangesToExcelQueryParams): QueryOptions<TData> {
          const queryKey =getEntityChangesToExcelQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetEntityChangesToExcel`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetEntityChangesToExcel
*/
        export function useGetEntityChangesToExcel <TData = GetEntityChangesToExcelResponse, TError = unknown>(params?: GetEntityChangesToExcelQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEntityChangesToExcelQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEntityChangesToExcelQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      