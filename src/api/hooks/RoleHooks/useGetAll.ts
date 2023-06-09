import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/RoleModels/GetAll";


        export const getAllQueryKey = (params?: GetAllQueryParams) => [`/api/services/app/Role/GetAll`, ...(params ? [params] : [])] as const;
      

        export function getAllQueryOptions <TData = GetAllResponse, TError = unknown>(params?: GetAllQueryParams): QueryOptions<TData, TError> {
          const queryKey =getAllQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Role/GetAll`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Role/GetAll
*/
        export function useGetAll <TData = GetAllResponse, TError = unknown>(params?: GetAllQueryParams, options?: { query?: UseQueryOptions<TData, TError> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllQueryOptions<TData, TError>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      