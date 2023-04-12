
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportAllRequest, ExportAllResponse } from "../../models/OrganizationUnitInfo/ExportAll";

        /**
* @summary 导出科室参数信息
* @link /api/services/app/OrganizationUnitInfo/ExportAll
*/
        export function useExportAll <TData = ExportAllResponse, TError = unknown, TVariables = ExportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnitInfo/ExportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    