import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ActivateRequest, ActivateResponse } from "../../models/UserModels/Activate";


        /**
* @link /api/services/app/User/Activate
*/
        export function useActivate <TData = ActivateResponse, TError = unknown, TVariables = ActivateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/Activate`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    