
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CheckDatabaseRequest, CheckDatabaseResponse } from "../../models/Install/CheckDatabase";

        /**
* @link /api/services/app/Install/CheckDatabase
*/
        export function useCheckDatabase <TData = CheckDatabaseResponse, TError = unknown, TVariables = CheckDatabaseRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Install/CheckDatabase`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    