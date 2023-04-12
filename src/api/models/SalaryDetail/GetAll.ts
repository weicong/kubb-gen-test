import type { SalaryDetailType } from "../SalaryDetailType";
import type { PagedResultDtoOfSalaryDetailDto } from "../PagedResultDtoOfSalaryDetailDto";

export type GetAllQueryParams = {
    /**
    * @description 批次Id
    * @type integer int64
    */
    salaryBatchId: number;
    salaryDetailType: SalaryDetailType;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 人员姓名
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @description 职工类别
    * @type string | undefined
    */
    userPostType?: string | undefined;
    /**
    * @description 级别
    * @type string | undefined
    */
    userPostLevel?: string | undefined;
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

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfSalaryDetailDto;
