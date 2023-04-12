
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateStateRequest, UpdateStateResponse } from "../../models/Ticket/UpdateState";

        /**
* @summary 更新票据状态（核销）
* @link /api/services/app/Ticket/UpdateState
*/
        export function useUpdateState <TData = UpdateStateResponse, TError = unknown, TVariables = UpdateStateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Ticket/UpdateState`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    