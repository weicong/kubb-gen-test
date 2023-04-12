import type { FileDto } from "../FileDto";

export type GetUsersToExcelQueryParams = {
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type array | undefined
    */
    permissions?: string[] | undefined;
    /**
    * @type integer | undefined int32
    */
    role?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnit?: number | undefined;
    /**
    * @type boolean | undefined
    */
    onlyLockedUsers?: boolean | undefined;
    /**
    * @description 所在科室
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 所在科室Id 不在权限范围内
    * @type boolean | undefined
    */
    organizationUnitIdNotInOrganizationUnits?: boolean | undefined;
    /**
    * @description 类别不为空
    * @type boolean | undefined
    */
    postTypeIsNotEmpty?: boolean | undefined;
    /**
    * @description 类别
    * @type string | undefined
    */
    postType?: string | undefined;
};

/**
* @description Success
*/
export type GetUsersToExcelResponse = FileDto;
