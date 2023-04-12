
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateInvoiceRequest, CreateInvoiceResponse } from "../../models/Invoice/CreateInvoice";

        /**
* @link /api/services/app/Invoice/CreateInvoice
*/
        export function useCreateInvoice <TData = CreateInvoiceResponse, TError = unknown, TVariables = CreateInvoiceRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Invoice/CreateInvoice`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    