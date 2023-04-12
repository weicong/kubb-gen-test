export type BudgetExecutionModeListRequestDto = {
    /**
    * @description 是否为政采
    * @type boolean | undefined
    */
    isGovernmentProcurement?: boolean | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};
