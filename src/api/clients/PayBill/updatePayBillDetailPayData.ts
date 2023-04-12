
import client from "../../../utils/axios-client";
import type { UpdatePayBillDetailPayDataRequest, UpdatePayBillDetailPayDataResponse } from "../../models/PayBill/UpdatePayBillDetailPayData";

      /**
* @summary 支出报销
* @link /api/services/app/PayBill/UpdatePayBillDetailPayData
*/
      export function updatePayBillDetailPayData <TData = UpdatePayBillDetailPayDataResponse, TVariables = UpdatePayBillDetailPayDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/PayBill/UpdatePayBillDetailPayData`,
          data,
          
        });
      };
    