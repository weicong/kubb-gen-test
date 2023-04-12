import type { BudgetAllocationItemOrganizationUnitQuarterType } from "./BudgetAllocationItemOrganizationUnitQuarterType";

export type BudgetAllocationItemOrganizationUnitQuarterDto = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemOrganizationUnitId?: number | undefined;
    /**
    * @description 季度
    * @type integer | undefined int32
    */
    quarter?: number | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    "type"?: BudgetAllocationItemOrganizationUnitQuarterType | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
