
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLanguageForEditResponse, GetLanguageForEditQueryParams } from "../../models/Language/GetLanguageForEdit";

        export const getLanguageForEditQueryKey = (params?: GetLanguageForEditQueryParams) => [`/api/services/app/Language/GetLanguageForEdit`, ...(params ? [params] : [])] as const;
      

        export function getLanguageForEditQueryOptions <TData = GetLanguageForEditResponse>(params?: GetLanguageForEditQueryParams): QueryOptions<TData> {
          const queryKey =getLanguageForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Language/GetLanguageForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Language/GetLanguageForEdit
*/
        export function useGetLanguageForEdit <TData = GetLanguageForEditResponse, TError = unknown>(params?: GetLanguageForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLanguageForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getLanguageForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      