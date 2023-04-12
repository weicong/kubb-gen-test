import type { PagedResultDtoOfOrganizationUnitRoleListDto } from "../PagedResultDtoOfOrganizationUnitRoleListDto";

export type GetOrganizationUnitRolesQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetOrganizationUnitRolesResponse = PagedResultDtoOfOrganizationUnitRoleListDto;
