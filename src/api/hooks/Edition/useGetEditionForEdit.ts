
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetEditionForEditResponse, GetEditionForEditQueryParams } from "../../models/Edition/GetEditionForEdit";

        export const getEditionForEditQueryKey = (params?: GetEditionForEditQueryParams) => [`/api/services/app/Edition/GetEditionForEdit`, ...(params ? [params] : [])] as const;
      

        export function getEditionForEditQueryOptions <TData = GetEditionForEditResponse>(params?: GetEditionForEditQueryParams): QueryOptions<TData> {
          const queryKey =getEditionForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Edition/GetEditionForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Edition/GetEditionForEdit
*/
        export function useGetEditionForEdit <TData = GetEditionForEditResponse, TError = unknown>(params?: GetEditionForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getEditionForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getEditionForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      