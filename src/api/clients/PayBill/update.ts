
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/PayBill/Update";

      /**
* @link /api/services/app/PayBill/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/PayBill/Update`,
          data,
          
        });
      };
    