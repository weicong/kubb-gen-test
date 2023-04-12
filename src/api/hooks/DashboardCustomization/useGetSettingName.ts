
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetSettingNameResponse, GetSettingNameQueryParams } from "../../models/DashboardCustomization/GetSettingName";

        export const getSettingNameQueryKey = (params?: GetSettingNameQueryParams) => [`/api/services/app/DashboardCustomization/GetSettingName`, ...(params ? [params] : [])] as const;
      

        export function getSettingNameQueryOptions <TData = GetSettingNameResponse>(params?: GetSettingNameQueryParams): QueryOptions<TData> {
          const queryKey =getSettingNameQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/DashboardCustomization/GetSettingName`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/DashboardCustomization/GetSettingName
*/
        export function useGetSettingName <TData = GetSettingNameResponse, TError = unknown>(params?: GetSettingNameQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getSettingNameQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getSettingNameQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      