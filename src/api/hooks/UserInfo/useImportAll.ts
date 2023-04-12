
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/UserInfo/ImportAll";

        /**
* @summary 导入人员参数信息
* @link /api/services/app/UserInfo/ImportAll
*/
        export function useImportAll <TData = ImportAllResponse, TError = unknown, TVariables = ImportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserInfo/ImportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    