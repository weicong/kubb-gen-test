
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SavePageRequest, SavePageResponse } from "../../models/DashboardCustomization/SavePage";

        /**
* @link /api/services/app/DashboardCustomization/SavePage
*/
        export function useSavePage <TData = SavePageResponse, TError = unknown, TVariables = SavePageRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/DashboardCustomization/SavePage`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    