
import client from "../../../utils/axios-client";
import type { CreateOrUpdateUserInfoRequest, CreateOrUpdateUserInfoResponse } from "../../models/UserInfo/CreateOrUpdateUserInfo";

      /**
* @summary 创建或更新用户信息
* @link /api/services/app/UserInfo/CreateOrUpdateUserInfo
*/
      export function createOrUpdateUserInfo <TData = CreateOrUpdateUserInfoResponse, TVariables = CreateOrUpdateUserInfoRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserInfo/CreateOrUpdateUserInfo`,
          data,
          
        });
      };
    