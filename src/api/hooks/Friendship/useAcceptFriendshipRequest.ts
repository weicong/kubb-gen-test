
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AcceptFriendshipRequestRequest, AcceptFriendshipRequestResponse } from "../../models/Friendship/AcceptFriendshipRequest";

        /**
* @link /api/services/app/Friendship/AcceptFriendshipRequest
*/
        export function useAcceptFriendshipRequest <TData = AcceptFriendshipRequestResponse, TError = unknown, TVariables = AcceptFriendshipRequestRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Friendship/AcceptFriendshipRequest`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    