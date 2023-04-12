
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetExpenditureClassificationsForOrganizationUnitResponse } from "../../models/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit";

        export const getExpenditureClassificationsForOrganizationUnitQueryKey = () => [`/api/services/app/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit`] as const;
      

      export function getExpenditureClassificationsForOrganizationUnitQueryOptions <TData = GetExpenditureClassificationsForOrganizationUnitResponse>(): QueryOptions<TData> {
        const queryKey =getExpenditureClassificationsForOrganizationUnitQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit`
            });
          },
        };
      };
    

        /**
* @summary 获取当前科室可用的支出申请类型
* @link /api/services/app/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit
*/
        export function useGetExpenditureClassificationsForOrganizationUnit <TData = GetExpenditureClassificationsForOrganizationUnitResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getExpenditureClassificationsForOrganizationUnitQueryKey();

          const query = useQuery<TData, TError>({
            ...getExpenditureClassificationsForOrganizationUnitQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      