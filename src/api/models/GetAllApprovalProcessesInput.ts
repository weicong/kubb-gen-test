import type { ApprovalState } from "./ApprovalState";

export type GetAllApprovalProcessesInput = {
    /**
    * @description 实体类型
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    /**
    * @description 主题
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 申请人姓名
    * @type string | undefined
    */
    submitterUserName?: string | undefined;
    /**
    * @description 申请人科室Id
    * @type integer | undefined int64
    */
    submitterUserOrganizationUnitId?: number | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};
