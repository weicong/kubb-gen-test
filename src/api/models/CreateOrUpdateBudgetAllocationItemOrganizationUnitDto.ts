import type { SharingMode } from "./SharingMode";
import type { BudgetAllocationItemOrganizationUnitQuarterDto } from "./BudgetAllocationItemOrganizationUnitQuarterDto";

export type CreateOrUpdateBudgetAllocationItemOrganizationUnitDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    budgetAllocationItemId?: number | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 金额
    * @type number | undefined double
    */
    amount?: number | undefined;
    sharingMode?: SharingMode | undefined;
    /**
    * @description 共享科室Id（以逗号分隔）
    * @type string | undefined
    */
    sharingOrganizationUnitIds?: string | undefined;
    /**
    * @description 共享科室Id
    * @type array | undefined
    */
    sharingOrganizationUnitIdList?: number[] | undefined;
    /**
    * @description 各季度金额
    * @type array | undefined
    */
    budgetAllocationItemOrganizationUnitQuarters?: BudgetAllocationItemOrganizationUnitQuarterDto[] | undefined;
};
