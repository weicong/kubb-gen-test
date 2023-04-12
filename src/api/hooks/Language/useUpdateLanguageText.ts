
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateLanguageTextRequest, UpdateLanguageTextResponse } from "../../models/Language/UpdateLanguageText";

        /**
* @link /api/services/app/Language/UpdateLanguageText
*/
        export function useUpdateLanguageText <TData = UpdateLanguageTextResponse, TError = unknown, TVariables = UpdateLanguageTextRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Language/UpdateLanguageText`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    