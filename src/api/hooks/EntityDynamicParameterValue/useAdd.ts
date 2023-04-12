
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddRequest, AddResponse } from "../../models/EntityDynamicParameterValue/Add";

        /**
* @link /api/services/app/EntityDynamicParameterValue/Add
*/
        export function useAdd <TData = AddResponse, TError = unknown, TVariables = AddRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/EntityDynamicParameterValue/Add`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    