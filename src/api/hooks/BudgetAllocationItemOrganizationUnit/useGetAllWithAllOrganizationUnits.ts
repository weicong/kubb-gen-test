
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllWithAllOrganizationUnitsResponse, GetAllWithAllOrganizationUnitsQueryParams } from "../../models/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits";

        export const getAllWithAllOrganizationUnitsQueryKey = (params?: GetAllWithAllOrganizationUnitsQueryParams) => [`/api/services/app/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits`, ...(params ? [params] : [])] as const;
      

        export function getAllWithAllOrganizationUnitsQueryOptions <TData = GetAllWithAllOrganizationUnitsResponse>(params?: GetAllWithAllOrganizationUnitsQueryParams): QueryOptions<TData> {
          const queryKey =getAllWithAllOrganizationUnitsQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits`,
                params
              });
            },
          };
        };
      

        /**
* @summary 用于财务预算分解
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits
*/
        export function useGetAllWithAllOrganizationUnits <TData = GetAllWithAllOrganizationUnitsResponse, TError = unknown>(params?: GetAllWithAllOrganizationUnitsQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllWithAllOrganizationUnitsQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllWithAllOrganizationUnitsQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      