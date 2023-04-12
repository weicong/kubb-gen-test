
import client from "../../../utils/axios-client";
import type { UpdateOrganizationUnitInfoRequest, UpdateOrganizationUnitInfoResponse } from "../../models/OrganizationUnitInfo/UpdateOrganizationUnitInfo";

      /**
* @summary 更新科室参数
* @link /api/services/app/OrganizationUnitInfo/UpdateOrganizationUnitInfo
*/
      export function updateOrganizationUnitInfo <TData = UpdateOrganizationUnitInfoResponse, TVariables = UpdateOrganizationUnitInfoRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/OrganizationUnitInfo/UpdateOrganizationUnitInfo`,
          data,
          
        });
      };
    