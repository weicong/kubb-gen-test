
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FindAllowedInputTypeRequest, FindAllowedInputTypeResponse, FindAllowedInputTypeQueryParams } from "../../models/DynamicParameter/FindAllowedInputType";

        /**
* @link /api/services/app/DynamicParameter/FindAllowedInputType
*/
        export function useFindAllowedInputType <TData = FindAllowedInputTypeResponse, TError = unknown, TVariables = FindAllowedInputTypeRequest>( params?: FindAllowedInputTypeQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/DynamicParameter/FindAllowedInputType`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    