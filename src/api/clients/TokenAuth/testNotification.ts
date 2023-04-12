
import client from "../../../utils/axios-client";
import type { TestNotificationResponse, TestNotificationQueryParams } from "../../models/TokenAuth/TestNotification";

      /**
* @link /api/TokenAuth/TestNotification
*/
      export function testNotification <TData = TestNotificationResponse>( params?: TestNotificationQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/TokenAuth/TestNotification`,
          params,
        });
      };
    