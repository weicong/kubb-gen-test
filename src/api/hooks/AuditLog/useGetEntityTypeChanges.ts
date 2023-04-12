
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEntityTypeChangesResponse, GetEntityTypeChangesQueryParams } from "../../models/AuditLog/GetEntityTypeChanges";

        export const getEntityTypeChangesQueryKey = (params?: GetEntityTypeChangesQueryParams) => [`/api/services/app/AuditLog/GetEntityTypeChanges`, ...(params ? [params] : [])] as const;
      

        export function getEntityTypeChangesQueryOptions <TData = GetEntityTypeChangesResponse>(params?: GetEntityTypeChangesQueryParams): QueryOptions<TData> {
          const queryKey =getEntityTypeChangesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetEntityTypeChanges`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetEntityTypeChanges
*/
        export function useGetEntityTypeChanges <TData = GetEntityTypeChangesResponse, TError = unknown>(params?: GetEntityTypeChangesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEntityTypeChangesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEntityTypeChangesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      