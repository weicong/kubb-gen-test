import type { GetBudgetItemStatisticsOutput } from "../GetBudgetItemStatisticsOutput";

export type GetBudgetItemStatisticsQueryParams = {
    /**
    * @description 预算编制Id
    * @type integer int64
    */
    budgetId: number;
    /**
    * @description 申报科室Id（用于筛选仅限此科室上报的科目）
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    /**
    * @description 隐藏归口科室为申报科室的科目
    * @type boolean | undefined
    */
    hideOwnForOrganizationUnit?: boolean | undefined;
    /**
    * @description 归口科室Id
    * @type integer | undefined int64
    */
    expenditureCatalogOrganizationUnitId?: number | undefined;
    /**
    * @description 所有级别均可展开
    * @type boolean | undefined
    */
    allLevelExpandable?: boolean | undefined;
    /**
    * @description 隐藏空科目
    * @type boolean | undefined
    */
    hideEmpty?: boolean | undefined;
    /**
    * @description 最大级别（含）[数据库层过滤]
    * @type integer | undefined int32
    */
    maxLevel?: number | undefined;
    /**
    * @description 起始编码路径（指定 RootId 后则忽略此项）[数据库层过滤]
    * @type string | undefined
    */
    codeStarts?: string | undefined;
    /**
    * @description 根节点Id [数据库层过滤]
    * @type integer | undefined int64
    */
    rootId?: number | undefined;
    /**
    * @description 获取平面结果
    * @type boolean | undefined
    */
    getFlatItems?: boolean | undefined;
};

/**
* @description Success
*/
export type GetBudgetItemStatisticsResponse = GetBudgetItemStatisticsOutput;
