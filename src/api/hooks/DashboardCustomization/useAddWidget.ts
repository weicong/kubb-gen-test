
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddWidgetRequest, AddWidgetResponse } from "../../models/DashboardCustomization/AddWidget";

        /**
* @link /api/services/app/DashboardCustomization/AddWidget
*/
        export function useAddWidget <TData = AddWidgetResponse, TError = unknown, TVariables = AddWidgetRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/DashboardCustomization/AddWidget`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    