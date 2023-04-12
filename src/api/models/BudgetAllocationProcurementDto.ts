import type { BudgetState } from "./BudgetState";
import type { BudgetAllocationProcurementItemDto } from "./BudgetAllocationProcurementItemDto";

export type BudgetAllocationProcurementDto = {
    /**
    * @type integer | undefined int64
    */
    budgetAllocationId?: number | undefined;
    state?: BudgetState | undefined;
    /**
    * @description 项目名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 科目编码
    * @type string | undefined
    */
    subjectCode?: string | undefined;
    /**
    * @description 项目大类
    * @type string | undefined
    */
    mainClass?: string | undefined;
    /**
    * @description 项目小类
    * @type string | undefined
    */
    subClass?: string | undefined;
    /**
    * @description 科目Id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    /**
    * @description 定稿
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 合计金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    /**
    * @type array | undefined
    */
    budgetAllocationProcurementItems?: BudgetAllocationProcurementItemDto[] | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
