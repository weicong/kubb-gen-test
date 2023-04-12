
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionsResponse } from "../../models/Edition/GetEditions";

        export const getEditionsQueryKey = () => [`/api/services/app/Edition/GetEditions`] as const;
      

      export function getEditionsQueryOptions <TData = GetEditionsResponse>(): QueryOptions<TData> {
        const queryKey =getEditionsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Edition/GetEditions`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Edition/GetEditions
*/
        export function useGetEditions <TData = GetEditionsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionsQueryKey();

          const query = useQuery<TData, TError>({
            ...getEditionsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      