
import client from "../../../utils/axios-client";
import type { AddBudgetItemToContractRequest, AddBudgetItemToContractResponse } from "../../models/Contract/AddBudgetItemToContract";

      /**
* @summary 添加预算项到合同项目，
根据合同项目类型自动创建非政采项目或政采项目分包申请，跳过审批流程，自动加入合同项目包中。
* @link /api/services/app/Contract/AddBudgetItemToContract
*/
      export function addBudgetItemToContract <TData = AddBudgetItemToContractResponse, TVariables = AddBudgetItemToContractRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Contract/AddBudgetItemToContract`,
          data,
          
        });
      };
    