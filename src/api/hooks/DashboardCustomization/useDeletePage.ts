
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeletePageRequest, DeletePageResponse, DeletePageQueryParams } from "../../models/DashboardCustomization/DeletePage";

        /**
* @link /api/services/app/DashboardCustomization/DeletePage
*/
        export function useDeletePage <TData = DeletePageResponse, TError = unknown, TVariables = DeletePageRequest>( params?: DeletePageQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/DashboardCustomization/DeletePage`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    