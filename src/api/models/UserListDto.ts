import type { UserListRoleDto } from "./UserListRoleDto";
import type { UserListOrganizationUnitDto } from "./UserListOrganizationUnitDto";

export type UserListDto = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    surname?: string | undefined;
    /**
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @type string | undefined
    */
    emailAddress?: string | undefined;
    /**
    * @type string | undefined
    */
    phoneNumber?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    profilePictureId?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isEmailConfirmed?: boolean | undefined;
    /**
    * @type array | undefined
    */
    roles?: UserListRoleDto[] | undefined;
    /**
    * @type array | undefined
    */
    organizationUnits?: UserListOrganizationUnitDto[] | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @description 所在科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 所在科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 二级科室Id
    * @type integer | undefined int64
    */
    secondaryOrganizationUnitId?: number | undefined;
    /**
    * @description 二级科室
    * @type string | undefined
    */
    secondaryOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 性别
    * @type string | undefined
    */
    gender?: string | undefined;
    /**
    * @description 职务
    * @type string | undefined
    */
    position?: string | undefined;
    /**
    * @description 职称
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 简介
    * @type string | undefined
    */
    biography?: string | undefined;
    /**
    * @description 序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 身份证号
    * @type string | undefined
    */
    idCardNumber?: string | undefined;
    /**
    * @description 银行卡号
    * @type string | undefined
    */
    bankCardNumber?: string | undefined;
    /**
    * @description 级别
    * @type string | undefined
    */
    postLevel?: string | undefined;
    /**
    * @description 职工类别
    * @type string | undefined
    */
    postType?: string | undefined;
    /**
    * @description 基础任务人员系数
    * @type number | undefined double
    */
    coefficient1?: number | undefined;
    /**
    * @description 责任津贴人员系数
    * @type number | undefined double
    */
    coefficient2?: number | undefined;
    /**
    * @description 通讯费标准
    * @type number | undefined double
    */
    coefficient3?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
