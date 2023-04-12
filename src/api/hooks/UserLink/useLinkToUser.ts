
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { LinkToUserRequest, LinkToUserResponse } from "../../models/UserLink/LinkToUser";

        /**
* @link /api/services/app/UserLink/LinkToUser
*/
        export function useLinkToUser <TData = LinkToUserResponse, TError = unknown, TVariables = LinkToUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserLink/LinkToUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    