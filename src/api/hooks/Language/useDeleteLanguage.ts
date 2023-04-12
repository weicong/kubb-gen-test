
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteLanguageRequest, DeleteLanguageResponse, DeleteLanguageQueryParams } from "../../models/Language/DeleteLanguage";

        /**
* @link /api/services/app/Language/DeleteLanguage
*/
        export function useDeleteLanguage <TData = DeleteLanguageResponse, TError = unknown, TVariables = DeleteLanguageRequest>( params?: DeleteLanguageQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Language/DeleteLanguage`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    