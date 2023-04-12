
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportAllInOneRequest, ExportAllInOneResponse } from "../../models/BudgetItem/ExportAllInOne";

        /**
* @summary 导出到一个包含多个Sheet的Excel文件
* @link /api/services/app/BudgetItem/ExportAllInOne
*/
        export function useExportAllInOne <TData = ExportAllInOneResponse, TError = unknown, TVariables = ExportAllInOneRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetItem/ExportAllInOne`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    