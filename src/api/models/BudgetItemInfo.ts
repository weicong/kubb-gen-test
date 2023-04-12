import type { BudgetInfo } from "./BudgetInfo";
import type { ExpenditureCatalogInfo } from "./ExpenditureCatalogInfo";
import type { UsingOrganizationUnitInfo } from "./UsingOrganizationUnitInfo";
import type { BudgetExecutionModeInfo } from "./BudgetExecutionModeInfo";

export type BudgetItemInfo = {
    budget?: BudgetInfo | undefined;
    expenditureCatalog?: ExpenditureCatalogInfo | undefined;
    usingOrganizationUnit?: UsingOrganizationUnitInfo | undefined;
    budgetExecutionMode?: BudgetExecutionModeInfo | undefined;
    /**
    * @description 项目名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 总价(元) = 单价 * 合计数量
    * @type number | undefined double
    */
    totalAmount?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
