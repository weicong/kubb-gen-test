
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetApprovalStatsResponse } from "../../models/ApprovalProcess/GetApprovalStats";

        export const getApprovalStatsQueryKey = () => [`/api/services/app/ApprovalProcess/GetApprovalStats`] as const;
      

      export function getApprovalStatsQueryOptions <TData = GetApprovalStatsResponse>(): QueryOptions<TData> {
        const queryKey =getApprovalStatsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/ApprovalProcess/GetApprovalStats`
            });
          },
        };
      };
    

        /**
* @summary 统计数据（非管理员仅统计自己的）
* @link /api/services/app/ApprovalProcess/GetApprovalStats
*/
        export function useGetApprovalStats <TData = GetApprovalStatsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getApprovalStatsQueryKey();

          const query = useQuery<TData, TError>({
            ...getApprovalStatsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      