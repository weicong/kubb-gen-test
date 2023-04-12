
import client from "../../../utils/axios-client";
import type { CreateRequest, CreateResponse } from "../../models/PayBill/Create";

      /**
* @link /api/services/app/PayBill/Create
*/
      export function create <TData = CreateResponse, TVariables = CreateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayBill/Create`,
          data,
          
        });
      };
    