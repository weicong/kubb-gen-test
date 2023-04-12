
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/ProjectStage/ImportAll";

        /**
* @summary 从 Excel 文件导入数据，导入记录对象为 TEntityDto。
* @link /api/services/app/ProjectStage/ImportAll
*/
        export function useImportAll <TData = ImportAllResponse, TError = unknown, TVariables = ImportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/ProjectStage/ImportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    