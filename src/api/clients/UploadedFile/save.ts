
import client from "../../../utils/axios-client";
import type { SaveRequest, SaveResponse } from "../../models/UploadedFile/Save";

      /**
* @link /api/services/app/UploadedFile/Save
*/
      export function save <TData = SaveResponse, TVariables = SaveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UploadedFile/Save`,
          data,
          
        });
      };
    