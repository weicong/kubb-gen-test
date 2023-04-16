import type { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeActivateRequest, DeActivateResponse } from "../../models/UserModels/DeActivate";


        /**
* @link /api/services/app/User/DeActivate
*/
        export function useDeActivate <TData = DeActivateResponse, TError = unknown, TVariables = DeActivateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/DeActivate`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    