
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FindUsersRequest, FindUsersResponse } from "../../models/OrganizationUnit/FindUsers";

        /**
* @link /api/services/app/OrganizationUnit/FindUsers
*/
        export function useFindUsers <TData = FindUsersResponse, TError = unknown, TVariables = FindUsersRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/FindUsers`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    