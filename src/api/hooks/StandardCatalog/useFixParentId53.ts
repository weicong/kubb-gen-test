
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FixParentId53Request, FixParentId53Response } from "../../models/StandardCatalog/FixParentId53";

        /**
* @link /api/services/app/StandardCatalog/FixParentId53
*/
        export function useFixParentId53 <TData = FixParentId53Response, TError = unknown, TVariables = FixParentId53Request>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/StandardCatalog/FixParentId53`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    