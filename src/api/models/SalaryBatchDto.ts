import type { SalaryBatchStatus } from "./SalaryBatchStatus";
import type { SalaryBatchOrganizationTypeInfoListItemDto } from "./SalaryBatchOrganizationTypeInfoListItemDto";
import type { SalaryBatchOrganizationUnitInfoListItemDto } from "./SalaryBatchOrganizationUnitInfoListItemDto";

export type SalaryBatchDto = {
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
    * @description 日期文本
    * @type string | undefined
    */
    dateLabel?: string | undefined;
    /**
    * @description 基础系数（基础任务 - 奖金系数）
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 责任系数（责任津贴 - 奖金系数）
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 岗位系数（岗位补贴 - 岗位系数）
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
    * @description 科室参数
    * @type array | undefined
    */
    salaryBatchOrganizationUnitInfos?: SalaryBatchOrganizationUnitInfoListItemDto[] | undefined;
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
