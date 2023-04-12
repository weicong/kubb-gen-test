
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/AssetFixedReport/Update";

        /**
* @link /api/services/app/AssetFixedReport/Update
*/
        export function useUpdate <TData = UpdateResponse, TError = unknown, TVariables = UpdateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/AssetFixedReport/Update`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    