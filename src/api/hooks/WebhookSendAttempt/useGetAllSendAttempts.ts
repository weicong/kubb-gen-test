
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllSendAttemptsResponse, GetAllSendAttemptsQueryParams } from "../../models/WebhookSendAttempt/GetAllSendAttempts";

        export const getAllSendAttemptsQueryKey = (params?: GetAllSendAttemptsQueryParams) => [`/api/services/app/WebhookSendAttempt/GetAllSendAttempts`, ...(params ? [params] : [])] as const;
      

        export function getAllSendAttemptsQueryOptions <TData = GetAllSendAttemptsResponse>(params?: GetAllSendAttemptsQueryParams): QueryOptions<TData> {
          const queryKey =getAllSendAttemptsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/WebhookSendAttempt/GetAllSendAttempts`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/WebhookSendAttempt/GetAllSendAttempts
*/
        export function useGetAllSendAttempts <TData = GetAllSendAttemptsResponse, TError = unknown>(params?: GetAllSendAttemptsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllSendAttemptsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllSendAttemptsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      