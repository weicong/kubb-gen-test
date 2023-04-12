import type { OrganizationUnit } from "./OrganizationUnit";

export type OrganizationUnitExtended = {
    /**
    * @description 排序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 组织代码
    * @type string | undefined
    */
    displayCode?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 科室类别
    * @type string | undefined
    */
    "type"?: string | undefined;
    /**
    * @description 业务考核
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 党建考核
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 负责科室Id
    * @type integer | undefined int64
    */
    manageOrganizationUnitId?: number | undefined;
    manageOrganizationUnit?: OrganizationUnitExtended | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    parent?: OrganizationUnit | undefined;
    /**
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @type string
    */
    code: string;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @type array | undefined
    */
    children?: OrganizationUnit[] | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
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
