
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAvailableExpenditureClassificationsResponse } from "../../models/BudgetControl/GetAvailableExpenditureClassifications";

        export const getAvailableExpenditureClassificationsQueryKey = () => [`/api/services/app/BudgetControl/GetAvailableExpenditureClassifications`] as const;
      

      export function getAvailableExpenditureClassificationsQueryOptions <TData = GetAvailableExpenditureClassificationsResponse>(): QueryOptions<TData> {
        const queryKey =getAvailableExpenditureClassificationsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/BudgetControl/GetAvailableExpenditureClassifications`
            });
          },
        };
      };
    

        /**
* @summary 获取当前科室可用的支出申请类型
* @link /api/services/app/BudgetControl/GetAvailableExpenditureClassifications
*/
        export function useGetAvailableExpenditureClassifications <TData = GetAvailableExpenditureClassificationsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAvailableExpenditureClassificationsQueryKey();

          const query = useQuery<TData, TError>({
            ...getAvailableExpenditureClassificationsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      