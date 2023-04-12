import type { SalaryBatchDto } from "./SalaryBatchDto";

export type PagedResultDtoOfSalaryBatchDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: SalaryBatchDto[] | undefined;
};
