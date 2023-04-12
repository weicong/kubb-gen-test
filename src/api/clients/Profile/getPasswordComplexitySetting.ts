
import client from "../../../utils/axios-client";
import type { GetPasswordComplexitySettingResponse } from "../../models/Profile/GetPasswordComplexitySetting";

      /**
* @link /api/services/app/Profile/GetPasswordComplexitySetting
*/
      export function getPasswordComplexitySetting <TData = GetPasswordComplexitySettingResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Profile/GetPasswordComplexitySetting`,
          
        });
      };
    