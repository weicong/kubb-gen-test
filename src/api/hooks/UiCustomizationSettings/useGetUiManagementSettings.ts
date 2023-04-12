
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/GetUiManagementSettings";

        export const getUiManagementSettingsQueryKey = () => [`/api/services/app/UiCustomizationSettings/GetUiManagementSettings`] as const;
      

      export function getUiManagementSettingsQueryOptions <TData = GetUiManagementSettingsResponse>(): QueryOptions<TData> {
        const queryKey =getUiManagementSettingsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/UiCustomizationSettings/GetUiManagementSettings`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/UiCustomizationSettings/GetUiManagementSettings
*/
        export function useGetUiManagementSettings <TData = GetUiManagementSettingsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUiManagementSettingsQueryKey();

          const query = useQuery<TData, TError>({
            ...getUiManagementSettingsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      