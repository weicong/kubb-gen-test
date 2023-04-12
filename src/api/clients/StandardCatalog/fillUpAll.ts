
import client from "../../../utils/axios-client";
import type { FillUpAllRequest, FillUpAllResponse } from "../../models/StandardCatalog/FillUpAll";

      /**
* @link /api/services/app/StandardCatalog/FillUpAll
*/
      export function fillUpAll <TData = FillUpAllResponse, TVariables = FillUpAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StandardCatalog/FillUpAll`,
          data,
          
        });
      };
    