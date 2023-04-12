
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FixWorkflowRequest, FixWorkflowResponse } from "../../models/PurchaseApply/FixWorkflow";

        /**
* @summary 修正审批流
* @link /api/services/app/PurchaseApply/FixWorkflow
*/
        export function useFixWorkflow <TData = FixWorkflowResponse, TError = unknown, TVariables = FixWorkflowRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PurchaseApply/FixWorkflow`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    