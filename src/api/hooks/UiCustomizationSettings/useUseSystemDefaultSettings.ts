
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UseSystemDefaultSettingsRequest, UseSystemDefaultSettingsResponse } from "../../models/UiCustomizationSettings/UseSystemDefaultSettings";

        /**
* @link /api/services/app/UiCustomizationSettings/UseSystemDefaultSettings
*/
        export function useUseSystemDefaultSettings <TData = UseSystemDefaultSettingsResponse, TError = unknown, TVariables = UseSystemDefaultSettingsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    