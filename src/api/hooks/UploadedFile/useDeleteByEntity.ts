
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteByEntityRequest, DeleteByEntityResponse, DeleteByEntityQueryParams } from "../../models/UploadedFile/DeleteByEntity";

        /**
* @link /api/services/app/UploadedFile/DeleteByEntity
*/
        export function useDeleteByEntity <TData = DeleteByEntityResponse, TError = unknown, TVariables = DeleteByEntityRequest>( params?: DeleteByEntityQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/UploadedFile/DeleteByEntity`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    