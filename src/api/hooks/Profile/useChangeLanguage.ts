
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ChangeLanguageRequest, ChangeLanguageResponse } from "../../models/Profile/ChangeLanguage";

        /**
* @link /api/services/app/Profile/ChangeLanguage
*/
        export function useChangeLanguage <TData = ChangeLanguageResponse, TError = unknown, TVariables = ChangeLanguageRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Profile/ChangeLanguage`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    