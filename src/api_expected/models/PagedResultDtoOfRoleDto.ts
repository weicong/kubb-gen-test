import type { RoleDto } from "./RoleDto";

export type PagedResultDtoOfRoleDto = {
    /**
    * @type array | undefined
    */
    items?: RoleDto[] | undefined;
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
};
