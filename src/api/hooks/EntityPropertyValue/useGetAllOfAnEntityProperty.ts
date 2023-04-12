
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllOfAnEntityPropertyResponse, GetAllOfAnEntityPropertyQueryParams } from "../../models/EntityPropertyValue/GetAllOfAnEntityProperty";

        export const getAllOfAnEntityPropertyQueryKey = (params?: GetAllOfAnEntityPropertyQueryParams) => [`/api/services/app/EntityPropertyValue/GetAllOfAnEntityProperty`, ...(params ? [params] : [])] as const;
      

        export function getAllOfAnEntityPropertyQueryOptions <TData = GetAllOfAnEntityPropertyResponse>(params?: GetAllOfAnEntityPropertyQueryParams): QueryOptions<TData> {
          const queryKey =getAllOfAnEntityPropertyQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/EntityPropertyValue/GetAllOfAnEntityProperty`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/EntityPropertyValue/GetAllOfAnEntityProperty
*/
        export function useGetAllOfAnEntityProperty <TData = GetAllOfAnEntityPropertyResponse, TError = unknown>(params?: GetAllOfAnEntityPropertyQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllOfAnEntityPropertyQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllOfAnEntityPropertyQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      