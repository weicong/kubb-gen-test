
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTimezonesResponse, GetTimezonesQueryParams } from "../../models/Timing/GetTimezones";

        export const getTimezonesQueryKey = (params?: GetTimezonesQueryParams) => [`/api/services/app/Timing/GetTimezones`, ...(params ? [params] : [])] as const;
      

        export function getTimezonesQueryOptions <TData = GetTimezonesResponse>(params?: GetTimezonesQueryParams): QueryOptions<TData> {
          const queryKey =getTimezonesQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Timing/GetTimezones`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Timing/GetTimezones
*/
        export function useGetTimezones <TData = GetTimezonesResponse, TError = unknown>(params?: GetTimezonesQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTimezonesQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTimezonesQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      