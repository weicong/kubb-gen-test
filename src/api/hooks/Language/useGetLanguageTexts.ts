
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLanguageTextsResponse, GetLanguageTextsQueryParams } from "../../models/Language/GetLanguageTexts";

        export const getLanguageTextsQueryKey = (params?: GetLanguageTextsQueryParams) => [`/api/services/app/Language/GetLanguageTexts`, ...(params ? [params] : [])] as const;
      

        export function getLanguageTextsQueryOptions <TData = GetLanguageTextsResponse>(params?: GetLanguageTextsQueryParams): QueryOptions<TData> {
          const queryKey =getLanguageTextsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Language/GetLanguageTexts`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Language/GetLanguageTexts
*/
        export function useGetLanguageTexts <TData = GetLanguageTextsResponse, TError = unknown>(params?: GetLanguageTextsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLanguageTextsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getLanguageTextsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      