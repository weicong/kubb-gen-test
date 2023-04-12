
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetDefaultEditionNameResponse } from "../../models/CommonLookup/GetDefaultEditionName";

        export const getDefaultEditionNameQueryKey = () => [`/api/services/app/CommonLookup/GetDefaultEditionName`] as const;
      

      export function getDefaultEditionNameQueryOptions <TData = GetDefaultEditionNameResponse>(): QueryOptions<TData> {
        const queryKey =getDefaultEditionNameQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/CommonLookup/GetDefaultEditionName`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/CommonLookup/GetDefaultEditionName
*/
        export function useGetDefaultEditionName <TData = GetDefaultEditionNameResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getDefaultEditionNameQueryKey();

          const query = useQuery<TData, TError>({
            ...getDefaultEditionNameQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      