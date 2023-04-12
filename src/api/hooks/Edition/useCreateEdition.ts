
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateEditionRequest, CreateEditionResponse } from "../../models/Edition/CreateEdition";

        /**
* @link /api/services/app/Edition/CreateEdition
*/
        export function useCreateEdition <TData = CreateEditionResponse, TError = unknown, TVariables = CreateEditionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Edition/CreateEdition`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    