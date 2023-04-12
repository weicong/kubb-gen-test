
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/UserInfo/ExportAll";

        /**
* @summary 导出人员参数信息
* @link /api/services/app/UserInfo/ExportAll
*/
        export function useExportAll <TData = ExportAllResponse, TError = unknown, TVariables = ExportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserInfo/ExportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    