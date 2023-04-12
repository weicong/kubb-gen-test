export type CreateApprovalProcessInput = {
    /**
    * @description 实体类型
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    /**
    * @description 实体Id
    * @type integer | undefined int64
    */
    entityId?: number | undefined;
    /**
    * @description 主题
    * @type string | undefined
    */
    subject?: string | undefined;
    /**
    * @description 审批人角色
    * @type string | undefined
    */
    approverRole?: string | undefined;
    /**
    * @description 审批人角色负责科室
    * @type integer | undefined int64
    */
    approverRoleOuId?: number | undefined;
    /**
    * @description WorkflowInstance Id
    * @type string | undefined
    */
    workflowInstanceId?: string | undefined;
};
