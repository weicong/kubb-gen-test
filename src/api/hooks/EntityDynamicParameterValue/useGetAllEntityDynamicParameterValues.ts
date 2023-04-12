
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllEntityDynamicParameterValuesResponse, GetAllEntityDynamicParameterValuesQueryParams } from "../../models/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues";

        export const getAllEntityDynamicParameterValuesQueryKey = (params?: GetAllEntityDynamicParameterValuesQueryParams) => [`/api/services/app/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues`, ...(params ? [params] : [])] as const;
      

        export function getAllEntityDynamicParameterValuesQueryOptions <TData = GetAllEntityDynamicParameterValuesResponse>(params?: GetAllEntityDynamicParameterValuesQueryParams): QueryOptions<TData> {
          const queryKey =getAllEntityDynamicParameterValuesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues
*/
        export function useGetAllEntityDynamicParameterValues <TData = GetAllEntityDynamicParameterValuesResponse, TError = unknown>(params?: GetAllEntityDynamicParameterValuesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllEntityDynamicParameterValuesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllEntityDynamicParameterValuesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      