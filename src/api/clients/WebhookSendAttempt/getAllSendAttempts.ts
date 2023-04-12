
import client from "../../../utils/axios-client";
import type { GetAllSendAttemptsResponse, GetAllSendAttemptsQueryParams } from "../../models/WebhookSendAttempt/GetAllSendAttempts";

      /**
* @link /api/services/app/WebhookSendAttempt/GetAllSendAttempts
*/
      export function getAllSendAttempts <TData = GetAllSendAttemptsResponse>( params?: GetAllSendAttemptsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSendAttempt/GetAllSendAttempts`,
          params,
        });
      };
    