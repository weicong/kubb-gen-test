import type { User } from "./User";

export type BudgetExecutionMode = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type string | undefined
    */
    color?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDefault?: boolean | undefined;
    /**
    * @description 是否为政采
    * @type boolean | undefined
    */
    isGovernmentProcurement?: boolean | undefined;
    /**
    * @description 金额 大于等于
    * @type number | undefined double
    */
    amountGe?: number | undefined;
    /**
    * @description 金额 小于
    * @type number | undefined double
    */
    amountLt?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    deleterUser?: User | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
