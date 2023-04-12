
import client from "../../../utils/axios-client";
import type { VerifySmsCodeRequest, VerifySmsCodeResponse } from "../../models/Profile/VerifySmsCode";

      /**
* @link /api/services/app/Profile/VerifySmsCode
*/
      export function verifySmsCode <TData = VerifySmsCodeResponse, TVariables = VerifySmsCodeRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/VerifySmsCode`,
          data,
          
        });
      };
    