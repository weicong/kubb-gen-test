
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetExecutionPlan/Get";

        export const getQueryKey = (params?: GetQueryParams) => [`/api/services/app/BudgetExecutionPlan/Get`, ...(params ? [params] : [])] as const;
      

        export function getQueryOptions <TData = GetResponse>(params?: GetQueryParams): QueryOptions<TData> {
          const queryKey =getQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/BudgetExecutionPlan/Get`,
                params
              });
            },
          };
        };
      

        /**
* @summary 获取单条 Dto
* @link /api/services/app/BudgetExecutionPlan/Get
*/
        export function useGet <TData = GetResponse, TError = unknown>(params?: GetQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      