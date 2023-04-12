
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RegisterRequest, RegisterResponse } from "../../models/Account/Register";

        /**
* @link /api/services/app/Account/Register
*/
        export function useRegister <TData = RegisterResponse, TError = unknown, TVariables = RegisterRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/Register`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    