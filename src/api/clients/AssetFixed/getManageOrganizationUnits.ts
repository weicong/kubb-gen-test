
import client from "../../../utils/axios-client";
import type { GetManageOrganizationUnitsResponse } from "../../models/AssetFixed/GetManageOrganizationUnits";

      /**
* @summary 获取归口科室列表
* @link /api/services/app/AssetFixed/GetManageOrganizationUnits
*/
      export function getManageOrganizationUnits <TData = GetManageOrganizationUnitsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixed/GetManageOrganizationUnits`,
          
        });
      };
    