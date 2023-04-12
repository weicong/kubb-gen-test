
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ReEditRequest, ReEditResponse } from "../../models/PayAdjust/ReEdit";

        /**
* @summary 重新修改
* @link /api/services/app/PayAdjust/ReEdit
*/
        export function useReEdit <TData = ReEditResponse, TError = unknown, TVariables = ReEditRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PayAdjust/ReEdit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    