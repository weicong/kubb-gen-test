
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetApprovedRequest, SetApprovedResponse } from "../../models/ContractPay/SetApproved";

        /**
* @summary 审批通过
* @link /api/services/app/ContractPay/SetApproved
*/
        export function useSetApproved <TData = SetApprovedResponse, TError = unknown, TVariables = SetApprovedRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/ContractPay/SetApproved`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    