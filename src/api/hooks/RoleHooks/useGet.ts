import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/RoleModels/Get";


        export const getQueryKey = (params?: GetQueryParams) => [`/api/services/app/Role/Get`, ...(params ? [params] : [])] as const;
      

        export function getQueryOptions <TData = GetResponse, TError = unknown>(params?: GetQueryParams): QueryOptions<TData, TError> {
          const queryKey =getQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Role/Get`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Role/Get
*/
        export function useGet <TData = GetResponse, TError = unknown>(params?: GetQueryParams, options?: { query?: UseQueryOptions<TData, TError> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getQueryOptions<TData, TError>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      