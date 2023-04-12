
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CleanValuesRequest, CleanValuesResponse } from "../../models/EntityDynamicParameterValue/CleanValues";

        /**
* @link /api/services/app/EntityDynamicParameterValue/CleanValues
*/
        export function useCleanValues <TData = CleanValuesResponse, TError = unknown, TVariables = CleanValuesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/EntityDynamicParameterValue/CleanValues`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    