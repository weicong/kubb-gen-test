import type { OrganizationUnitUserListDto } from "./OrganizationUnitUserListDto";

export type PagedResultDtoOfOrganizationUnitUserListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: OrganizationUnitUserListDto[] | undefined;
};
