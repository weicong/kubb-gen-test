import type { PayBill } from "./PayBill";
import type { BudgetItem } from "./BudgetItem";
import type { BudgetExecutionMode } from "./BudgetExecutionMode";
import type { ExpenditureCatalog } from "./ExpenditureCatalog";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { FundItem } from "./FundItem";
import type { User } from "./User";

export type PayBillDetail = {
    /**
    * @description 支出id对应支出表id
    * @type integer | undefined int64
    */
    payBillId?: number | undefined;
    payBill?: PayBill | undefined;
    /**
    * @description 预算项Id
    * @type integer | undefined int64
    */
    budgetItemId?: number | undefined;
    budgetItem?: BudgetItem | undefined;
    /**
    * @description 预算执行类型Id
    * @type integer | undefined int64
    */
    budgetExecutionModeId?: number | undefined;
    budgetExecutionMode?: BudgetExecutionMode | undefined;
    /**
    * @description 预算科目Id
    * @type integer | undefined int64
    */
    expenditureCatalogId?: number | undefined;
    expenditureCatalog?: ExpenditureCatalog | undefined;
    /**
    * @description 预算项所属科室Id
    * @type integer | undefined int64
    */
    usingOrganizationUnitId?: number | undefined;
    usingOrganizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 事后报销：发生时间
    * @type string | undefined date-time
    */
    occurTime?: string | undefined;
    /**
    * @description 申请金额
    * @type number | undefined double
    */
    applyData?: number | undefined;
    /**
    * @description 报销金额
    * @type number | undefined double
    */
    payData?: number | undefined;
    /**
    * @description 经费名称id
    * @type integer | undefined int64
    */
    fundItemId?: number | undefined;
    fundItem?: FundItem | undefined;
    /**
    * @type string | undefined
    */
    remark?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    state?: number | undefined;
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
