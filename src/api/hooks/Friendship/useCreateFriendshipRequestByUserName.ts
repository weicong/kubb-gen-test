
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateFriendshipRequestByUserNameRequest, CreateFriendshipRequestByUserNameResponse } from "../../models/Friendship/CreateFriendshipRequestByUserName";

        /**
* @link /api/services/app/Friendship/CreateFriendshipRequestByUserName
*/
        export function useCreateFriendshipRequestByUserName <TData = CreateFriendshipRequestByUserNameResponse, TError = unknown, TVariables = CreateFriendshipRequestByUserNameRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Friendship/CreateFriendshipRequestByUserName`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    