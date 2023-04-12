
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetCurrentLoginInformationsResponse } from "../../models/Session/GetCurrentLoginInformations";

        export const getCurrentLoginInformationsQueryKey = () => [`/api/services/app/Session/GetCurrentLoginInformations`] as const;
      

      export function getCurrentLoginInformationsQueryOptions <TData = GetCurrentLoginInformationsResponse>(): QueryOptions<TData> {
        const queryKey =getCurrentLoginInformationsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Session/GetCurrentLoginInformations`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Session/GetCurrentLoginInformations
*/
        export function useGetCurrentLoginInformations <TData = GetCurrentLoginInformationsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getCurrentLoginInformationsQueryKey();

          const query = useQuery<TData, TError>({
            ...getCurrentLoginInformationsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      