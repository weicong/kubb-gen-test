
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateEditionRequest, UpdateEditionResponse } from "../../models/Edition/UpdateEdition";

        /**
* @link /api/services/app/Edition/UpdateEdition
*/
        export function useUpdateEdition <TData = UpdateEditionResponse, TError = unknown, TVariables = UpdateEditionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Edition/UpdateEdition`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    