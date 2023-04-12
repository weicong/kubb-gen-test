
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllAllowedInputTypeNamesResponse } from "../../models/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames";

        export const getAllAllowedInputTypeNamesQueryKey = () => [`/api/services/app/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames`] as const;
      

      export function getAllAllowedInputTypeNamesQueryOptions <TData = GetAllAllowedInputTypeNamesResponse>(): QueryOptions<TData> {
        const queryKey =getAllAllowedInputTypeNamesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames
*/
        export function useGetAllAllowedInputTypeNames <TData = GetAllAllowedInputTypeNamesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllAllowedInputTypeNamesQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllAllowedInputTypeNamesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      