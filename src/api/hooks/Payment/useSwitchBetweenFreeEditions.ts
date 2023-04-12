
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SwitchBetweenFreeEditionsRequest, SwitchBetweenFreeEditionsResponse, SwitchBetweenFreeEditionsQueryParams } from "../../models/Payment/SwitchBetweenFreeEditions";

        /**
* @link /api/services/app/Payment/SwitchBetweenFreeEditions
*/
        export function useSwitchBetweenFreeEditions <TData = SwitchBetweenFreeEditionsResponse, TError = unknown, TVariables = SwitchBetweenFreeEditionsRequest>( params?: SwitchBetweenFreeEditionsQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/SwitchBetweenFreeEditions`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    