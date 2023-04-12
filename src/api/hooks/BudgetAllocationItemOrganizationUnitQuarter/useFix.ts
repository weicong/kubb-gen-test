
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FixRequest, FixResponse } from "../../models/BudgetAllocationItemOrganizationUnitQuarter/Fix";

        /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Fix
*/
        export function useFix <TData = FixResponse, TError = unknown, TVariables = FixRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Fix`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    