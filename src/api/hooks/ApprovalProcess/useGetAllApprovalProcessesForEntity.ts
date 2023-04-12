
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllApprovalProcessesForEntityResponse, GetAllApprovalProcessesForEntityQueryParams } from "../../models/ApprovalProcess/GetAllApprovalProcessesForEntity";

        export const getAllApprovalProcessesForEntityQueryKey = (params?: GetAllApprovalProcessesForEntityQueryParams) => [`/api/services/app/ApprovalProcess/GetAllApprovalProcessesForEntity`, ...(params ? [params] : [])] as const;
      

        export function getAllApprovalProcessesForEntityQueryOptions <TData = GetAllApprovalProcessesForEntityResponse>(params?: GetAllApprovalProcessesForEntityQueryParams): QueryOptions<TData> {
          const queryKey =getAllApprovalProcessesForEntityQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/ApprovalProcess/GetAllApprovalProcessesForEntity`,
                params
              });
            },
          };
        };
      

        /**
* @summary 获取单个实体的审批记录
* @link /api/services/app/ApprovalProcess/GetAllApprovalProcessesForEntity
*/
        export function useGetAllApprovalProcessesForEntity <TData = GetAllApprovalProcessesForEntityResponse, TError = unknown>(params?: GetAllApprovalProcessesForEntityQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllApprovalProcessesForEntityQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllApprovalProcessesForEntityQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      