
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/SalaryDetail/ExportAll";

        /**
* @link /api/services/app/SalaryDetail/ExportAll
*/
        export function useExportAll <TData = ExportAllResponse, TError = unknown, TVariables = ExportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/SalaryDetail/ExportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    