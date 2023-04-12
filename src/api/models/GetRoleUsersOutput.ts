import type { RoleUserListItemDto } from "./RoleUserListItemDto";

export type GetRoleUsersOutput = {
    /**
    * @type integer | undefined int64
    */
    roleId?: number | undefined;
    /**
    * @type string | undefined
    */
    roleName?: string | undefined;
    /**
    * @type string | undefined
    */
    roleDisplayName?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @type array | undefined
    */
    users?: RoleUserListItemDto[] | undefined;
};
