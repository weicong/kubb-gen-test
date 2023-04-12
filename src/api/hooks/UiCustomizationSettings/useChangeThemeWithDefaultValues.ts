
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ChangeThemeWithDefaultValuesRequest, ChangeThemeWithDefaultValuesResponse, ChangeThemeWithDefaultValuesQueryParams } from "../../models/UiCustomizationSettings/ChangeThemeWithDefaultValues";

        /**
* @link /api/services/app/UiCustomizationSettings/ChangeThemeWithDefaultValues
*/
        export function useChangeThemeWithDefaultValues <TData = ChangeThemeWithDefaultValuesResponse, TError = unknown, TVariables = ChangeThemeWithDefaultValuesRequest>( params?: ChangeThemeWithDefaultValuesQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UiCustomizationSettings/ChangeThemeWithDefaultValues`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    