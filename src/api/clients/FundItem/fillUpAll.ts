
import client from "../../../utils/axios-client";
import type { FillUpAllRequest, FillUpAllResponse } from "../../models/FundItem/FillUpAll";

      /**
* @link /api/services/app/FundItem/FillUpAll
*/
      export function fillUpAll <TData = FillUpAllResponse, TVariables = FillUpAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/FundItem/FillUpAll`,
          data,
          
        });
      };
    