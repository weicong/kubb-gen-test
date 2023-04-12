
import { useQuery, QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { GetAllEntitiesResponse } from "../../models/DynamicEntityParameterDefinition/GetAllEntities";

        export const getAllEntitiesQueryKey = () => [`/api/services/app/DynamicEntityParameterDefinition/GetAllEntities`] as const;
      

      export function getAllEntitiesQueryOptions <TData = GetAllEntitiesResponse>(): QueryOptions<TData> {
        const queryKey =getAllEntitiesQueryKey();

        return {
          queryKey,
          queryFn: () => {
            return client<TData>({
              method: "get",
              url: `/api/services/app/DynamicEntityParameterDefinition/GetAllEntities`
            });
          },
        };
      };
    

        /**
* @link /api/services/app/DynamicEntityParameterDefinition/GetAllEntities
*/
        export function useGetAllEntities <TData = GetAllEntitiesResponse, TError = unknown>(options?: { query?: UseQueryOptions<TData> }): UseQueryResult<TData, unknown> & { queryKey: QueryKey } {
          const { query: queryOptions } = options ?? {};
          const queryKey = queryOptions?.queryKey ?? getAllEntitiesQueryKey();

          const query = useQuery<TData, TError>({
            ...getAllEntitiesQueryOptions<TData>(),
            ...queryOptions
          }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

          query.queryKey = queryKey as QueryKey;

          return query;
        };
      