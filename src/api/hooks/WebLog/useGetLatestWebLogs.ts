
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetLatestWebLogsResponse } from "../../models/WebLog/GetLatestWebLogs";

        export const getLatestWebLogsQueryKey = () => [`/api/services/app/WebLog/GetLatestWebLogs`] as const;
      

      export function getLatestWebLogsQueryOptions <TData = GetLatestWebLogsResponse>(): QueryOptions<TData> {
        const queryKey =getLatestWebLogsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/WebLog/GetLatestWebLogs`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/WebLog/GetLatestWebLogs
*/
        export function useGetLatestWebLogs <TData = GetLatestWebLogsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getLatestWebLogsQueryKey();

          const query = useQuery<TData, TError>({
            ...getLatestWebLogsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      