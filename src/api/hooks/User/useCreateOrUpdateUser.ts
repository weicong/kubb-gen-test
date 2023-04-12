
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrUpdateUserRequest, CreateOrUpdateUserResponse } from "../../models/User/CreateOrUpdateUser";

        /**
* @link /api/services/app/User/CreateOrUpdateUser
*/
        export function useCreateOrUpdateUser <TData = CreateOrUpdateUserResponse, TError = unknown, TVariables = CreateOrUpdateUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/CreateOrUpdateUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    