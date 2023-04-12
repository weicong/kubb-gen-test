
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetDashboardDefinitionResponse, GetDashboardDefinitionQueryParams } from "../../models/DashboardCustomization/GetDashboardDefinition";

        export const getDashboardDefinitionQueryKey = (params?: GetDashboardDefinitionQueryParams) => [`/api/services/app/DashboardCustomization/GetDashboardDefinition`, ...(params ? [params] : [])] as const;
      

        export function getDashboardDefinitionQueryOptions <TData = GetDashboardDefinitionResponse>(params?: GetDashboardDefinitionQueryParams): QueryOptions<TData> {
          const queryKey =getDashboardDefinitionQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/DashboardCustomization/GetDashboardDefinition`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/DashboardCustomization/GetDashboardDefinition
*/
        export function useGetDashboardDefinition <TData = GetDashboardDefinitionResponse, TError = unknown>(params?: GetDashboardDefinitionQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getDashboardDefinitionQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getDashboardDefinitionQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      