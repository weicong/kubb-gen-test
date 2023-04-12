
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetPasswordComplexitySettingResponse } from "../../models/Profile/GetPasswordComplexitySetting";

        export const getPasswordComplexitySettingQueryKey = () => [`/api/services/app/Profile/GetPasswordComplexitySetting`] as const;
      

      export function getPasswordComplexitySettingQueryOptions <TData = GetPasswordComplexitySettingResponse>(): QueryOptions<TData> {
        const queryKey =getPasswordComplexitySettingQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/Profile/GetPasswordComplexitySetting`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/Profile/GetPasswordComplexitySetting
*/
        export function useGetPasswordComplexitySetting <TData = GetPasswordComplexitySettingResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getPasswordComplexitySettingQueryKey();

          const query = useQuery<TData, TError>({
            ...getPasswordComplexitySettingQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      