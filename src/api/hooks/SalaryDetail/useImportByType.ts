
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ImportByTypeRequest, ImportByTypeResponse } from "../../models/SalaryDetail/ImportByType";

        /**
* @summary 导入
* @link /api/services/app/SalaryDetail/ImportByType
*/
        export function useImportByType <TData = ImportByTypeResponse, TError = unknown, TVariables = ImportByTypeRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/SalaryDetail/ImportByType`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    