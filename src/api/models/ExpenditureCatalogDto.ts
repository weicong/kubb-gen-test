import type { BudgetItemType } from "./BudgetItemType";

export type ExpenditureCatalogDto = {
    /**
    * @description 科目编码
    * @type string | undefined
    */
    codeName?: string | undefined;
    /**
    * @description 归口管理科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 归口管理科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 标准科目Id
    * @type integer | undefined int64
    */
    standardCatalogId?: number | undefined;
    /**
    * @description 标准科目
    * @type string | undefined
    */
    standardCatalogName?: string | undefined;
    budgetItemType?: BudgetItemType | undefined;
    /**
    * @description 是否启用
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 仅限指定科室申报Ids（以逗号分隔）
    * @type string | undefined
    */
    onlyForOrganizationUnitIds?: string | undefined;
    /**
    * @description 仅支出申请类型Ids（以逗号分隔）
    * @type string | undefined
    */
    onlyForExpenditureClassificationIds?: string | undefined;
    /**
    * @description 排序序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description [自动维护] 包含上级的完整名称
    * @type string | undefined
    */
    fullName?: string | undefined;
    /**
    * @description [自动维护] 编码路径
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description [自动维护] 级别
    * @type integer | undefined int32
    */
    level?: number | undefined;
    /**
    * @description 父级Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @description 子节点
    * @type array | undefined
    */
    children?: ExpenditureCatalogDto[] | undefined;
    /**
    * @description 是否为叶节点
    * @type boolean | undefined
    */
    isLeaf?: boolean | undefined;
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
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
