
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetUsingOrganizationUnitsResponse } from "../../models/BudgetItem/GetUsingOrganizationUnits";

        export const getUsingOrganizationUnitsQueryKey = () => [`/api/services/app/BudgetItem/GetUsingOrganizationUnits`] as const;
      

      export function getUsingOrganizationUnitsQueryOptions <TData = GetUsingOrganizationUnitsResponse>(): QueryOptions<TData> {
        const queryKey =getUsingOrganizationUnitsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/BudgetItem/GetUsingOrganizationUnits`
            });
          },
        };
      };
    

        /**
* @summary 获取所有使用科室
* @link /api/services/app/BudgetItem/GetUsingOrganizationUnits
*/
        export function useGetUsingOrganizationUnits <TData = GetUsingOrganizationUnitsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getUsingOrganizationUnitsQueryKey();

          const query = useQuery<TData, TError>({
            ...getUsingOrganizationUnitsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      