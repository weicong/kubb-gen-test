
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { NewRegistrationSucceedRequest, NewRegistrationSucceedResponse, NewRegistrationSucceedQueryParams } from "../../models/Payment/NewRegistrationSucceed";

        /**
* @link /api/services/app/Payment/NewRegistrationSucceed
*/
        export function useNewRegistrationSucceed <TData = NewRegistrationSucceedResponse, TError = unknown, TVariables = NewRegistrationSucceedRequest>( params?: NewRegistrationSucceedQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/NewRegistrationSucceed`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    