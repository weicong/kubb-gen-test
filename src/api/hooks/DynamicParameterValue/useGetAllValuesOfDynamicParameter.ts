
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllValuesOfDynamicParameterResponse, GetAllValuesOfDynamicParameterQueryParams } from "../../models/DynamicParameterValue/GetAllValuesOfDynamicParameter";

        export const getAllValuesOfDynamicParameterQueryKey = (params?: GetAllValuesOfDynamicParameterQueryParams) => [`/api/services/app/DynamicParameterValue/GetAllValuesOfDynamicParameter`, ...(params ? [params] : [])] as const;
      

        export function getAllValuesOfDynamicParameterQueryOptions <TData = GetAllValuesOfDynamicParameterResponse>(params?: GetAllValuesOfDynamicParameterQueryParams): QueryOptions<TData> {
          const queryKey =getAllValuesOfDynamicParameterQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/DynamicParameterValue/GetAllValuesOfDynamicParameter`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/DynamicParameterValue/GetAllValuesOfDynamicParameter
*/
        export function useGetAllValuesOfDynamicParameter <TData = GetAllValuesOfDynamicParameterResponse, TError = unknown>(params?: GetAllValuesOfDynamicParameterQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllValuesOfDynamicParameterQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllValuesOfDynamicParameterQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      