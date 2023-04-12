
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteEditionRequest, DeleteEditionResponse, DeleteEditionQueryParams } from "../../models/Edition/DeleteEdition";

        /**
* @link /api/services/app/Edition/DeleteEdition
*/
        export function useDeleteEdition <TData = DeleteEditionResponse, TError = unknown, TVariables = DeleteEditionRequest>( params?: DeleteEditionQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Edition/DeleteEdition`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    