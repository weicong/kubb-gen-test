
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddNewPageRequest, AddNewPageResponse } from "../../models/DashboardCustomization/AddNewPage";

        /**
* @link /api/services/app/DashboardCustomization/AddNewPage
*/
        export function useAddNewPage <TData = AddNewPageResponse, TError = unknown, TVariables = AddNewPageRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/DashboardCustomization/AddNewPage`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    