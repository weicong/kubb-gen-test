
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { InitModifiedDataRequest, InitModifiedDataResponse } from "../../models/SalaryDetail/InitModifiedData";

        /**
* @link /api/services/app/SalaryDetail/InitModifiedData
*/
        export function useInitModifiedData <TData = InitModifiedDataResponse, TError = unknown, TVariables = InitModifiedDataRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/SalaryDetail/InitModifiedData`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    