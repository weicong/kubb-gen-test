
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateProfilePictureRequest, UpdateProfilePictureResponse } from "../../models/Profile/UpdateProfilePicture";

        /**
* @link /api/services/app/Profile/UpdateProfilePicture
*/
        export function useUpdateProfilePicture <TData = UpdateProfilePictureResponse, TError = unknown, TVariables = UpdateProfilePictureRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Profile/UpdateProfilePicture`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    