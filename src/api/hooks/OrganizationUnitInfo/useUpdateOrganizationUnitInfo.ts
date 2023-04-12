
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateOrganizationUnitInfoRequest, UpdateOrganizationUnitInfoResponse } from "../../models/OrganizationUnitInfo/UpdateOrganizationUnitInfo";

        /**
* @summary 更新科室参数
* @link /api/services/app/OrganizationUnitInfo/UpdateOrganizationUnitInfo
*/
        export function useUpdateOrganizationUnitInfo <TData = UpdateOrganizationUnitInfoResponse, TError = unknown, TVariables = UpdateOrganizationUnitInfoRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/OrganizationUnitInfo/UpdateOrganizationUnitInfo`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    