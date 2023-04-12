
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetupRequest, SetupResponse } from "../../models/Install/Setup";

        /**
* @link /api/services/app/Install/Setup
*/
        export function useSetup <TData = SetupResponse, TError = unknown, TVariables = SetupRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Install/Setup`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    