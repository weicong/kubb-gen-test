import type { SalaryDetailType } from "./SalaryDetailType";
import type { FileDto } from "./FileDto";

export type ImportSalaryDetailsInput = {
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
    salaryDetailType?: SalaryDetailType | undefined;
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
};
