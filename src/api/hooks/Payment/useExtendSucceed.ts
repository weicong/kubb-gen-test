
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExtendSucceedRequest, ExtendSucceedResponse, ExtendSucceedQueryParams } from "../../models/Payment/ExtendSucceed";

        /**
* @link /api/services/app/Payment/ExtendSucceed
*/
        export function useExtendSucceed <TData = ExtendSucceedResponse, TError = unknown, TVariables = ExtendSucceedRequest>( params?: ExtendSucceedQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/ExtendSucceed`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    