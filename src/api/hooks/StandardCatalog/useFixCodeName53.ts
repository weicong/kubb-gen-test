
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FixCodeName53Request, FixCodeName53Response } from "../../models/StandardCatalog/FixCodeName53";

        /**
* @link /api/services/app/StandardCatalog/FixCodeName53
*/
        export function useFixCodeName53 <TData = FixCodeName53Response, TError = unknown, TVariables = FixCodeName53Request>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/StandardCatalog/FixCodeName53`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    