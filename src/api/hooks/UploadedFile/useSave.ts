
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SaveRequest, SaveResponse } from "../../models/UploadedFile/Save";

        /**
* @link /api/services/app/UploadedFile/Save
*/
        export function useSave <TData = SaveResponse, TError = unknown, TVariables = SaveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UploadedFile/Save`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    