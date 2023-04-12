
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllParametersOfAnEntityResponse, GetAllParametersOfAnEntityQueryParams } from "../../models/EntityDynamicParameter/GetAllParametersOfAnEntity";

        export const getAllParametersOfAnEntityQueryKey = (params?: GetAllParametersOfAnEntityQueryParams) => [`/api/services/app/EntityDynamicParameter/GetAllParametersOfAnEntity`, ...(params ? [params] : [])] as const;
      

        export function getAllParametersOfAnEntityQueryOptions <TData = GetAllParametersOfAnEntityResponse>(params?: GetAllParametersOfAnEntityQueryParams): QueryOptions<TData> {
          const queryKey =getAllParametersOfAnEntityQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/EntityDynamicParameter/GetAllParametersOfAnEntity`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/EntityDynamicParameter/GetAllParametersOfAnEntity
*/
        export function useGetAllParametersOfAnEntity <TData = GetAllParametersOfAnEntityResponse, TError = unknown>(params?: GetAllParametersOfAnEntityQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllParametersOfAnEntityQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllParametersOfAnEntityQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      