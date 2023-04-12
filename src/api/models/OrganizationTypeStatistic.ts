import type { SalaryDetailDto } from "./SalaryDetailDto";

export type OrganizationTypeStatistic = {
    /**
    * @description 科室类别
    * @type string | undefined
    */
    organizationUnitType?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    count?: number | undefined;
    /**
    * @type number | undefined double
    */
    sum?: number | undefined;
    /**
    * @type number | undefined double
    */
    avg?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: SalaryDetailDto[] | undefined;
};
