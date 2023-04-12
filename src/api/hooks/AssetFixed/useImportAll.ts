
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/AssetFixed/ImportAll";

        /**
* @link /api/services/app/AssetFixed/ImportAll
*/
        export function useImportAll <TData = ImportAllResponse, TError = unknown, TVariables = ImportAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/AssetFixed/ImportAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    