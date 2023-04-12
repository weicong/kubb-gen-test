
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEntityHistoryObjectTypesResponse } from "../../models/AuditLog/GetEntityHistoryObjectTypes";

        export const getEntityHistoryObjectTypesQueryKey = () => [`/api/services/app/AuditLog/GetEntityHistoryObjectTypes`] as const;
      

      export function getEntityHistoryObjectTypesQueryOptions <TData = GetEntityHistoryObjectTypesResponse>(): QueryOptions<TData> {
        const queryKey =getEntityHistoryObjectTypesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/AuditLog/GetEntityHistoryObjectTypes`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/AuditLog/GetEntityHistoryObjectTypes
*/
        export function useGetEntityHistoryObjectTypes <TData = GetEntityHistoryObjectTypesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEntityHistoryObjectTypesQueryKey();

          const query = useQuery<TData, TError>({
            ...getEntityHistoryObjectTypesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      