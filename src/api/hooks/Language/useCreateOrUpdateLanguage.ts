
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrUpdateLanguageRequest, CreateOrUpdateLanguageResponse } from "../../models/Language/CreateOrUpdateLanguage";

        /**
* @link /api/services/app/Language/CreateOrUpdateLanguage
*/
        export function useCreateOrUpdateLanguage <TData = CreateOrUpdateLanguageResponse, TError = unknown, TVariables = CreateOrUpdateLanguageRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Language/CreateOrUpdateLanguage`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    