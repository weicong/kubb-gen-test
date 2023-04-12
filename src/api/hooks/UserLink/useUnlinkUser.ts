
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UnlinkUserRequest, UnlinkUserResponse } from "../../models/UserLink/UnlinkUser";

        /**
* @link /api/services/app/UserLink/UnlinkUser
*/
        export function useUnlinkUser <TData = UnlinkUserResponse, TError = unknown, TVariables = UnlinkUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserLink/UnlinkUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    