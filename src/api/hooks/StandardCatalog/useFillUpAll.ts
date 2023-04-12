
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FillUpAllRequest, FillUpAllResponse } from "../../models/StandardCatalog/FillUpAll";

        /**
* @link /api/services/app/StandardCatalog/FillUpAll
*/
        export function useFillUpAll <TData = FillUpAllResponse, TError = unknown, TVariables = FillUpAllRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/StandardCatalog/FillUpAll`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    