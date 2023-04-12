
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { LogOutResponse } from "../../models/TokenAuth/LogOut";

        export const logOutQueryKey = () => [`/api/TokenAuth/LogOut`] as const;
      

      export function logOutQueryOptions <TData = LogOutResponse>(): QueryOptions<TData> {
        const queryKey =logOutQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/TokenAuth/LogOut`
            });
          },
        };
      };
    

        /**
* @link /api/TokenAuth/LogOut
*/
        export function useLogOut <TData = LogOutResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? logOutQueryKey();

          const query = useQuery<TData, TError>({
            ...logOutQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      