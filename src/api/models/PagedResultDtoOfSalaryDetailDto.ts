import type { SalaryDetailDto } from "./SalaryDetailDto";

export type PagedResultDtoOfSalaryDetailDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: SalaryDetailDto[] | undefined;
};
