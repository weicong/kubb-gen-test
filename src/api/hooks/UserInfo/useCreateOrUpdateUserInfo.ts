
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrUpdateUserInfoRequest, CreateOrUpdateUserInfoResponse } from "../../models/UserInfo/CreateOrUpdateUserInfo";

        /**
* @summary 创建或更新用户信息
* @link /api/services/app/UserInfo/CreateOrUpdateUserInfo
*/
        export function useCreateOrUpdateUserInfo <TData = CreateOrUpdateUserInfoResponse, TError = unknown, TVariables = CreateOrUpdateUserInfoRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserInfo/CreateOrUpdateUserInfo`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    