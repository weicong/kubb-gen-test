import type { NameValueDtoOfInt64 } from "./NameValueDtoOfInt64";

export type UserLoginInfoDto = {
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
    profilePictureId?: string | undefined;
    /**
    * @type array | undefined
    */
    assignedRoles?: string[] | undefined;
    /**
    * @type array | undefined
    */
    userOrganizationUnits?: NameValueDtoOfInt64[] | undefined;
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
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
