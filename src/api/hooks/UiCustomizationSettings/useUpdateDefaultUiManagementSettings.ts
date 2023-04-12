
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateDefaultUiManagementSettingsRequest, UpdateDefaultUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/UpdateDefaultUiManagementSettings";

        /**
* @link /api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings
*/
        export function useUpdateDefaultUiManagementSettings <TData = UpdateDefaultUiManagementSettingsResponse, TError = unknown, TVariables = UpdateDefaultUiManagementSettingsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    