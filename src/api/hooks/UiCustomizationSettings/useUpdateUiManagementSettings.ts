
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateUiManagementSettingsRequest, UpdateUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/UpdateUiManagementSettings";

        /**
* @link /api/services/app/UiCustomizationSettings/UpdateUiManagementSettings
*/
        export function useUpdateUiManagementSettings <TData = UpdateUiManagementSettingsResponse, TError = unknown, TVariables = UpdateUiManagementSettingsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    