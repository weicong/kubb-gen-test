
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateCurrentUserProfileRequest, UpdateCurrentUserProfileResponse } from "../../models/Profile/UpdateCurrentUserProfile";

        /**
* @link /api/services/app/Profile/UpdateCurrentUserProfile
*/
        export function useUpdateCurrentUserProfile <TData = UpdateCurrentUserProfileResponse, TError = unknown, TVariables = UpdateCurrentUserProfileRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Profile/UpdateCurrentUserProfile`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    