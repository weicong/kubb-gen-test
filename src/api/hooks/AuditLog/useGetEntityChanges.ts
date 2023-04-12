
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEntityChangesResponse, GetEntityChangesQueryParams } from "../../models/AuditLog/GetEntityChanges";

        export const getEntityChangesQueryKey = (params?: GetEntityChangesQueryParams) => [`/api/services/app/AuditLog/GetEntityChanges`, ...(params ? [params] : [])] as const;
      

        export function getEntityChangesQueryOptions <TData = GetEntityChangesResponse>(params?: GetEntityChangesQueryParams): QueryOptions<TData> {
          const queryKey =getEntityChangesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetEntityChanges`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetEntityChanges
*/
        export function useGetEntityChanges <TData = GetEntityChangesResponse, TError = unknown>(params?: GetEntityChangesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEntityChangesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEntityChangesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      