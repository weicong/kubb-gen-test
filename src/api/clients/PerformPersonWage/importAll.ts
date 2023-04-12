
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/PerformPersonWage/ImportAll";

      /**
* @link /api/services/app/PerformPersonWage/ImportAll
*/
      export function importAll <TData = ImportAllResponse, TVariables = ImportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PerformPersonWage/ImportAll`,
          data,
          
        });
      };
    