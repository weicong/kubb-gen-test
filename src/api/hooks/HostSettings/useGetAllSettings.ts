
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllSettingsResponse } from "../../models/HostSettings/GetAllSettings";

        export const getAllSettingsQueryKey = () => [`/api/services/app/HostSettings/GetAllSettings`] as const;
      

      export function getAllSettingsQueryOptions <TData = GetAllSettingsResponse>(): QueryOptions<TData> {
        const queryKey =getAllSettingsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/HostSettings/GetAllSettings`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/HostSettings/GetAllSettings
*/
        export function useGetAllSettings <TData = GetAllSettingsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllSettingsQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllSettingsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      