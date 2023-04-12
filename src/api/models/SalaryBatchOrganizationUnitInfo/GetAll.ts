import type { PagedResultDtoOfSalaryBatchOrganizationUnitInfoDto } from "../PagedResultDtoOfSalaryBatchOrganizationUnitInfoDto";

export type GetAllQueryParams = {
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
    /**
    * @description 负责科室Id
    * @type integer | undefined int64
    */
    manageOrganizationUnitId?: number | undefined;
    /**
    * @description 可展开
    * @type boolean | undefined
    */
    expandable?: boolean | undefined;
    /**
    * @description 导出模样名称
    * @type string | undefined
    */
    exportTemplateName?: string | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfSalaryBatchOrganizationUnitInfoDto;
