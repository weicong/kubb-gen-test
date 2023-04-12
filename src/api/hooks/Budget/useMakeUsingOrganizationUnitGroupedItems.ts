
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { MakeUsingOrganizationUnitGroupedItemsRequest, MakeUsingOrganizationUnitGroupedItemsResponse } from "../../models/Budget/MakeUsingOrganizationUnitGroupedItems";

        /**
* @summary “支出”预算项按支出科目、使用科室汇总
* @link /api/services/app/Budget/MakeUsingOrganizationUnitGroupedItems
*/
        export function useMakeUsingOrganizationUnitGroupedItems <TData = MakeUsingOrganizationUnitGroupedItemsResponse, TError = unknown, TVariables = MakeUsingOrganizationUnitGroupedItemsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Budget/MakeUsingOrganizationUnitGroupedItems`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    