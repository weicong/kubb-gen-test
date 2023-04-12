import type { ExpenditureClassificationDto } from "./ExpenditureClassificationDto";

export type GetAvailableExpenditureClassificationsOutput = {
    /**
    * @type integer | undefined int64
    */
    budgetPlanId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ExpenditureClassificationDto[] | undefined;
};
