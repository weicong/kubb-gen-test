
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetDefaultLanguageRequest, SetDefaultLanguageResponse } from "../../models/Language/SetDefaultLanguage";

        /**
* @link /api/services/app/Language/SetDefaultLanguage
*/
        export function useSetDefaultLanguage <TData = SetDefaultLanguageResponse, TError = unknown, TVariables = SetDefaultLanguageRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Language/SetDefaultLanguage`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    