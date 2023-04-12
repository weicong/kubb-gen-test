import type { RoleEditDto } from "./RoleEditDto";

export type CreateOrUpdateRoleInput = {
    role: RoleEditDto;
    /**
    * @type array
    */
    grantedPermissionNames: string[];
};
