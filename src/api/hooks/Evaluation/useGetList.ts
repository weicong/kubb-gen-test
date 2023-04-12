
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetListResponse, GetListQueryParams } from "../../models/Evaluation/GetList";

        export const getListQueryKey = (params?: GetListQueryParams) => [`/api/services/app/Evaluation/GetList`, ...(params ? [params] : [])] as const;
      

        export function getListQueryOptions <TData = GetListResponse>(params?: GetListQueryParams): QueryOptions<TData> {
          const queryKey =getListQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Evaluation/GetList`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Evaluation/GetList
*/
        export function useGetList <TData = GetListResponse, TError = unknown>(params?: GetListQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getListQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getListQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      