
import client from "../../../utils/axios-client";
import type { NewRegistrationSucceedRequest, NewRegistrationSucceedResponse, NewRegistrationSucceedQueryParams } from "../../models/Payment/NewRegistrationSucceed";

      /**
* @link /api/services/app/Payment/NewRegistrationSucceed
*/
      export function newRegistrationSucceed <TData = NewRegistrationSucceedResponse, TVariables = NewRegistrationSucceedRequest>( data: TVariables, params?: NewRegistrationSucceedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/NewRegistrationSucceed`,
          data,
          params,
        });
      };
    