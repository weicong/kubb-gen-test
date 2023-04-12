
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLanguagesResponse } from "../../models/Language/GetLanguages";

        export const getLanguagesQueryKey = () => [`/api/services/app/Language/GetLanguages`] as const;
      

      export function getLanguagesQueryOptions <TData = GetLanguagesResponse>(): QueryOptions<TData> {
        const queryKey =getLanguagesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Language/GetLanguages`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Language/GetLanguages
*/
        export function useGetLanguages <TData = GetLanguagesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLanguagesQueryKey();

          const query = useQuery<TData, TError>({
            ...getLanguagesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      