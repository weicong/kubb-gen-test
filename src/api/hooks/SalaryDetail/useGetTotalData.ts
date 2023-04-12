
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTotalDataResponse, GetTotalDataQueryParams } from "../../models/SalaryDetail/GetTotalData";

        export const getTotalDataQueryKey = (params?: GetTotalDataQueryParams) => [`/api/services/app/SalaryDetail/GetTotalData`, ...(params ? [params] : [])] as const;
      

        export function getTotalDataQueryOptions <TData = GetTotalDataResponse>(params?: GetTotalDataQueryParams): QueryOptions<TData> {
          const queryKey =getTotalDataQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/SalaryDetail/GetTotalData`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/SalaryDetail/GetTotalData
*/
        export function useGetTotalData <TData = GetTotalDataResponse, TError = unknown>(params?: GetTotalDataQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTotalDataQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTotalDataQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      