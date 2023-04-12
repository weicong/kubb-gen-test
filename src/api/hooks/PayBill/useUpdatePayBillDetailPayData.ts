
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdatePayBillDetailPayDataRequest, UpdatePayBillDetailPayDataResponse } from "../../models/PayBill/UpdatePayBillDetailPayData";

        /**
* @summary 支出报销
* @link /api/services/app/PayBill/UpdatePayBillDetailPayData
*/
        export function useUpdatePayBillDetailPayData <TData = UpdatePayBillDetailPayDataResponse, TError = unknown, TVariables = UpdatePayBillDetailPayDataRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/PayBill/UpdatePayBillDetailPayData`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    