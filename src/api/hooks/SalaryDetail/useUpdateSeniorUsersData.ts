
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateSeniorUsersDataRequest, UpdateSeniorUsersDataResponse } from "../../models/SalaryDetail/UpdateSeniorUsersData";

        /**
* @link /api/services/app/SalaryDetail/UpdateSeniorUsersData
*/
        export function useUpdateSeniorUsersData <TData = UpdateSeniorUsersDataResponse, TError = unknown, TVariables = UpdateSeniorUsersDataRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/SalaryDetail/UpdateSeniorUsersData`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    