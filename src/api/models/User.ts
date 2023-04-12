import type { UserOrganizationUnit } from "./UserOrganizationUnit";
import type { OrganizationUnitExtended } from "./OrganizationUnitExtended";
import type { UserToken } from "./UserToken";
import type { UserLogin } from "./UserLogin";
import type { UserRole } from "./UserRole";
import type { UserClaim } from "./UserClaim";
import type { UserPermissionSetting } from "./UserPermissionSetting";
import type { Setting } from "./Setting";

export type User = {
    /**
    * @type string | undefined uuid
    */
    profilePictureId?: string | undefined;
    /**
    * @type boolean | undefined
    */
    shouldChangePasswordOnNextLogin?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    signInTokenExpireTimeUtc?: string | undefined;
    /**
    * @type string | undefined
    */
    signInToken?: string | undefined;
    /**
    * @type string | undefined
    */
    googleAuthenticatorKey?: string | undefined;
    /**
    * @type array | undefined
    */
    organizationUnits?: UserOrganizationUnit[] | undefined;
    /**
    * @description 所在科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnitExtended | undefined;
    /**
    * @description 二级科室Id
    * @type integer | undefined int64
    */
    secondaryOrganizationUnitId?: number | undefined;
    secondaryOrganizationUnit?: OrganizationUnitExtended | undefined;
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
    * @type string
    */
    normalizedUserName: string;
    /**
    * @type string
    */
    normalizedEmailAddress: string;
    /**
    * @type string | undefined
    */
    concurrencyStamp?: string | undefined;
    /**
    * @type array | undefined
    */
    tokens?: UserToken[] | undefined;
    deleterUser?: User | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
    /**
    * @type string | undefined
    */
    authenticationSource?: string | undefined;
    /**
    * @type string
    */
    userName: string;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type string
    */
    emailAddress: string;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    surname: string;
    /**
    * @type string | undefined
    */
    fullName?: string | undefined;
    /**
    * @type string
    */
    password: string;
    /**
    * @type string | undefined
    */
    emailConfirmationCode?: string | undefined;
    /**
    * @type string | undefined
    */
    passwordResetCode?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lockoutEndDateUtc?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    accessFailedCount?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isLockoutEnabled?: boolean | undefined;
    /**
    * @type string | undefined
    */
    phoneNumber?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isPhoneNumberConfirmed?: boolean | undefined;
    /**
    * @type string | undefined
    */
    securityStamp?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isTwoFactorEnabled?: boolean | undefined;
    /**
    * @type array | undefined
    */
    logins?: UserLogin[] | undefined;
    /**
    * @type array | undefined
    */
    roles?: UserRole[] | undefined;
    /**
    * @type array | undefined
    */
    claims?: UserClaim[] | undefined;
    /**
    * @type array | undefined
    */
    permissions?: UserPermissionSetting[] | undefined;
    /**
    * @type array | undefined
    */
    settings?: Setting[] | undefined;
    /**
    * @type boolean | undefined
    */
    isEmailConfirmed?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
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
