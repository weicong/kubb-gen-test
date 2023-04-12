
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetManageOrganizationUnitsResponse } from "../../models/AssetFixed/GetManageOrganizationUnits";

        export const getManageOrganizationUnitsQueryKey = () => [`/api/services/app/AssetFixed/GetManageOrganizationUnits`] as const;
      

      export function getManageOrganizationUnitsQueryOptions <TData = GetManageOrganizationUnitsResponse>(): QueryOptions<TData> {
        const queryKey =getManageOrganizationUnitsQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/AssetFixed/GetManageOrganizationUnits`
            });
          },
        };
      };
    

        /**
* @summary 获取归口科室列表
* @link /api/services/app/AssetFixed/GetManageOrganizationUnits
*/
        export function useGetManageOrganizationUnits <TData = GetManageOrganizationUnitsResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getManageOrganizationUnitsQueryKey();

          const query = useQuery<TData, TError>({
            ...getManageOrganizationUnitsQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      