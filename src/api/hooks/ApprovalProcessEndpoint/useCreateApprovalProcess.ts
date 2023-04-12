
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateApprovalProcessRequest, CreateApprovalProcessResponse } from "../../models/ApprovalProcessEndpoint/CreateApprovalProcess";

        /**
* @link /api/ApprovalProcessEndpoint/CreateApprovalProcess
*/
        export function useCreateApprovalProcess <TData = CreateApprovalProcessResponse, TError = unknown, TVariables = CreateApprovalProcessRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/ApprovalProcessEndpoint/CreateApprovalProcess`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    