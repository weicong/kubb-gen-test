
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllResponse } from "../../models/EntityDynamicParameter/GetAll";

        export const getAllQueryKey = () => [`/api/services/app/EntityDynamicParameter/GetAll`] as const;
      

      export function getAllQueryOptions <TData = GetAllResponse>(): QueryOptions<TData> {
        const queryKey =getAllQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/EntityDynamicParameter/GetAll`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/EntityDynamicParameter/GetAll
*/
        export function useGetAll <TData = GetAllResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      