
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsResponse } from "../../models/OrganizationUnit/GetOrganizationUnits";

        export const getOrganizationUnitsQueryKey = () => [`/api/services/app/OrganizationUnit/GetOrganizationUnits`] as const;
      

      export function getOrganizationUnitsQueryOptions <TData = GetOrganizationUnitsResponse>(): QueryOptions<TData> {
        const queryKey =getOrganizationUnitsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/OrganizationUnit/GetOrganizationUnits`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnits
*/
        export function useGetOrganizationUnits <TData = GetOrganizationUnitsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getOrganizationUnitsQueryKey();

          const query = useQuery<TData, TError>({
            ...getOrganizationUnitsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      