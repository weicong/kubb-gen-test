
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FixParentId54Request, FixParentId54Response } from "../../models/StandardCatalog/FixParentId54";

        /**
* @link /api/services/app/StandardCatalog/FixParentId54
*/
        export function useFixParentId54 <TData = FixParentId54Response, TError = unknown, TVariables = FixParentId54Request>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/StandardCatalog/FixParentId54`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    