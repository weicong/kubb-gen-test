
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { MoveTenantsToAnotherEditionRequest, MoveTenantsToAnotherEditionResponse } from "../../models/Edition/MoveTenantsToAnotherEdition";

        /**
* @link /api/services/app/Edition/MoveTenantsToAnotherEdition
*/
        export function useMoveTenantsToAnotherEdition <TData = MoveTenantsToAnotherEditionResponse, TError = unknown, TVariables = MoveTenantsToAnotherEditionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Edition/MoveTenantsToAnotherEdition`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    