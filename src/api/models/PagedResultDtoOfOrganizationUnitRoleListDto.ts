import type { OrganizationUnitRoleListDto } from "./OrganizationUnitRoleListDto";

export type PagedResultDtoOfOrganizationUnitRoleListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: OrganizationUnitRoleListDto[] | undefined;
};
