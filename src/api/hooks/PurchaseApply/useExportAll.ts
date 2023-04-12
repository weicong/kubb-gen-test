
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/PurchaseApply/ExportAll";

        /**
* @summary 导出到 Excel 文件，导出记录对名为 TEntityDto。
* @link /api/services/app/PurchaseApply/ExportAll
*/
        export function useExportAll <TData = ExportAllResponse, TError = unknown, TVariables = ExportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PurchaseApply/ExportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    