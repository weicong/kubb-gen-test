
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportToWordRequest, ExportToWordResponse } from "../../models/AssetChange/ExportToWord";

        /**
* @link /api/services/app/AssetChange/ExportToWord
*/
        export function useExportToWord <TData = ExportToWordResponse, TError = unknown, TVariables = ExportToWordRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/AssetChange/ExportToWord`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    