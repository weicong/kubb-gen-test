
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { InsertOrUpdateAllValuesRequest, InsertOrUpdateAllValuesResponse } from "../../models/EntityDynamicParameterValue/InsertOrUpdateAllValues";

        /**
* @link /api/services/app/EntityDynamicParameterValue/InsertOrUpdateAllValues
*/
        export function useInsertOrUpdateAllValues <TData = InsertOrUpdateAllValuesResponse, TError = unknown, TVariables = InsertOrUpdateAllValuesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/EntityDynamicParameterValue/InsertOrUpdateAllValues`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    