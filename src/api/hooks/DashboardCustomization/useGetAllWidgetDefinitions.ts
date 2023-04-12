
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllWidgetDefinitionsResponse, GetAllWidgetDefinitionsQueryParams } from "../../models/DashboardCustomization/GetAllWidgetDefinitions";

        export const getAllWidgetDefinitionsQueryKey = (params?: GetAllWidgetDefinitionsQueryParams) => [`/api/services/app/DashboardCustomization/GetAllWidgetDefinitions`, ...(params ? [params] : [])] as const;
      

        export function getAllWidgetDefinitionsQueryOptions <TData = GetAllWidgetDefinitionsResponse>(params?: GetAllWidgetDefinitionsQueryParams): QueryOptions<TData> {
          const queryKey =getAllWidgetDefinitionsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/DashboardCustomization/GetAllWidgetDefinitions`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/DashboardCustomization/GetAllWidgetDefinitions
*/
        export function useGetAllWidgetDefinitions <TData = GetAllWidgetDefinitionsResponse, TError = unknown>(params?: GetAllWidgetDefinitionsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllWidgetDefinitionsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllWidgetDefinitionsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      