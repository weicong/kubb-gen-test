
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEntityPropertyChangesResponse, GetEntityPropertyChangesQueryParams } from "../../models/AuditLog/GetEntityPropertyChanges";

        export const getEntityPropertyChangesQueryKey = (params?: GetEntityPropertyChangesQueryParams) => [`/api/services/app/AuditLog/GetEntityPropertyChanges`, ...(params ? [params] : [])] as const;
      

        export function getEntityPropertyChangesQueryOptions <TData = GetEntityPropertyChangesResponse>(params?: GetEntityPropertyChangesQueryParams): QueryOptions<TData> {
          const queryKey =getEntityPropertyChangesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/AuditLog/GetEntityPropertyChanges`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/AuditLog/GetEntityPropertyChanges
*/
        export function useGetEntityPropertyChanges <TData = GetEntityPropertyChangesResponse, TError = unknown>(params?: GetEntityPropertyChangesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEntityPropertyChangesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEntityPropertyChangesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      