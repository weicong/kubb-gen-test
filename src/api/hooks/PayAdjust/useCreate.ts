
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/PayAdjust/Create";

        /**
* @link /api/services/app/PayAdjust/Create
*/
        export function useCreate <TData = CreateResponse, TError = unknown, TVariables = CreateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PayAdjust/Create`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    