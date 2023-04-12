
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { VerifySmsCodeRequest, VerifySmsCodeResponse } from "../../models/Profile/VerifySmsCode";

        /**
* @link /api/services/app/Profile/VerifySmsCode
*/
        export function useVerifySmsCode <TData = VerifySmsCodeResponse, TError = unknown, TVariables = VerifySmsCodeRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Profile/VerifySmsCode`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    