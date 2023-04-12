
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetBudgetOrganizationUnitSelectListResponse } from "../../models/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList";

        export const getBudgetOrganizationUnitSelectListQueryKey = () => [`/api/services/app/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList`] as const;
      

      export function getBudgetOrganizationUnitSelectListQueryOptions <TData = GetBudgetOrganizationUnitSelectListResponse>(): QueryOptions<TData> {
        const queryKey =getBudgetOrganizationUnitSelectListQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList
*/
        export function useGetBudgetOrganizationUnitSelectList <TData = GetBudgetOrganizationUnitSelectListResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getBudgetOrganizationUnitSelectListQueryKey();

          const query = useQuery<TData, TError>({
            ...getBudgetOrganizationUnitSelectListQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      