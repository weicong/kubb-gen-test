
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateFriendshipRequestRequest, CreateFriendshipRequestResponse } from "../../models/Friendship/CreateFriendshipRequest";

        /**
* @link /api/services/app/Friendship/CreateFriendshipRequest
*/
        export function useCreateFriendshipRequest <TData = CreateFriendshipRequestResponse, TError = unknown, TVariables = CreateFriendshipRequestRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Friendship/CreateFriendshipRequest`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    