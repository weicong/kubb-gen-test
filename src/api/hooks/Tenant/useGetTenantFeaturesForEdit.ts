
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetTenantFeaturesForEditResponse, GetTenantFeaturesForEditQueryParams } from "../../models/Tenant/GetTenantFeaturesForEdit";

        export const getTenantFeaturesForEditQueryKey = (params?: GetTenantFeaturesForEditQueryParams) => [`/api/services/app/Tenant/GetTenantFeaturesForEdit`, ...(params ? [params] : [])] as const;
      

        export function getTenantFeaturesForEditQueryOptions <TData = GetTenantFeaturesForEditResponse>(params?: GetTenantFeaturesForEditQueryParams): QueryOptions<TData> {
          const queryKey =getTenantFeaturesForEditQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/Tenant/GetTenantFeaturesForEdit`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/Tenant/GetTenantFeaturesForEdit
*/
        export function useGetTenantFeaturesForEdit <TData = GetTenantFeaturesForEditResponse, TError = unknown>(params?: GetTenantFeaturesForEditQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getTenantFeaturesForEditQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getTenantFeaturesForEditQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      