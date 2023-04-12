
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrUpdateListRequest, CreateOrUpdateListResponse } from "../../models/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList";

        /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList
*/
        export function useCreateOrUpdateList <TData = CreateOrUpdateListResponse, TError = unknown, TVariables = CreateOrUpdateListRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    