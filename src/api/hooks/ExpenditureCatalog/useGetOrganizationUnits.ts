
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsResponse, GetOrganizationUnitsQueryParams } from "../../models/ExpenditureCatalog/GetOrganizationUnits";

        export const getOrganizationUnitsQueryKey = (params?: GetOrganizationUnitsQueryParams) => [`/api/services/app/ExpenditureCatalog/GetOrganizationUnits`, ...(params ? [params] : [])] as const;
      

        export function getOrganizationUnitsQueryOptions <TData = GetOrganizationUnitsResponse>(params?: GetOrganizationUnitsQueryParams): QueryOptions<TData> {
          const queryKey =getOrganizationUnitsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/ExpenditureCatalog/GetOrganizationUnits`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/ExpenditureCatalog/GetOrganizationUnits
*/
        export function useGetOrganizationUnits <TData = GetOrganizationUnitsResponse, TError = unknown>(params?: GetOrganizationUnitsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationUnitsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getOrganizationUnitsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      