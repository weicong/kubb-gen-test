export type InitSalaryDetailModifiedDataInput = {
    /**
    * @description 批次Id
    * @type integer int64
    */
    salaryBatchId: number;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};
