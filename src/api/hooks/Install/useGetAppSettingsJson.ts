
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAppSettingsJsonResponse } from "../../models/Install/GetAppSettingsJson";

        export const getAppSettingsJsonQueryKey = () => [`/api/services/app/Install/GetAppSettingsJson`] as const;
      

      export function getAppSettingsJsonQueryOptions <TData = GetAppSettingsJsonResponse>(): QueryOptions<TData> {
        const queryKey =getAppSettingsJsonQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Install/GetAppSettingsJson`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Install/GetAppSettingsJson
*/
        export function useGetAppSettingsJson <TData = GetAppSettingsJsonResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAppSettingsJsonQueryKey();

          const query = useQuery<TData, TError>({
            ...getAppSettingsJsonQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      