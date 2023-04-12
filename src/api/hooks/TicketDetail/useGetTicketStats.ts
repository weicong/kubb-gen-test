
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTicketStatsResponse, GetTicketStatsQueryParams } from "../../models/TicketDetail/GetTicketStats";

        export const getTicketStatsQueryKey = (params?: GetTicketStatsQueryParams) => [`/api/services/app/TicketDetail/GetTicketStats`, ...(params ? [params] : [])] as const;
      

        export function getTicketStatsQueryOptions <TData = GetTicketStatsResponse>(params?: GetTicketStatsQueryParams): QueryOptions<TData> {
          const queryKey =getTicketStatsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/TicketDetail/GetTicketStats`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/TicketDetail/GetTicketStats
*/
        export function useGetTicketStats <TData = GetTicketStatsResponse, TError = unknown>(params?: GetTicketStatsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTicketStatsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTicketStatsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      