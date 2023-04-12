
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/UploadedFile/GetAll";

        export const getAllQueryKey = (params?: GetAllQueryParams) => [`/api/services/app/UploadedFile/GetAll`, ...(params ? [params] : [])] as const;
      

        export function getAllQueryOptions <TData = GetAllResponse>(params?: GetAllQueryParams): QueryOptions<TData> {
          const queryKey =getAllQueryKey(params);

          return {
            queryKey,
            queryFn: () => {
              return client<TData>({
                method: "get",
                url: `/api/services/app/UploadedFile/GetAll`,
                params
              });
            },
          };
        };
      

        /**
* @link /api/services/app/UploadedFile/GetAll
*/
        export function useGetAll <TData = GetAllResponse, TError = unknown>(params?: GetAllQueryParams, options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllQueryKey(params);
          
          const query = useQuery<TData, TError>({
            ...getAllQueryOptions<TData>(params),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      