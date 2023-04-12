import type { SalaryBatchStatus } from "./SalaryBatchStatus";
import type { SalaryBatchOrganizationTypeInfoListItemDto } from "./SalaryBatchOrganizationTypeInfoListItemDto";
import type { SalaryBatchOrganizationUnitInfoListItemDto } from "./SalaryBatchOrganizationUnitInfoListItemDto";

export type UpdateSalaryBatchDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 标题
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 日期（年-月）
    * @type string | undefined date-time
    */
    date?: string | undefined;
    /**
    * @description 基础系数
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 责任系数
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 岗位系数
    * @type number | undefined double
    */
    coefficient3?: number | undefined;
    status?: SalaryBatchStatus | undefined;
    /**
    * @description 科室类别参数（目标效益）
    * @type array | undefined
    */
    salaryBatchOrganizationTypeInfos?: SalaryBatchOrganizationTypeInfoListItemDto[] | undefined;
    /**
    * @description 科室参数（目标效益）
    * @type array | undefined
    */
    salaryBatchOrganizationUnitInfos?: SalaryBatchOrganizationUnitInfoListItemDto[] | undefined;
};
