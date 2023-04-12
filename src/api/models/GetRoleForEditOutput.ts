import type { RoleEditDto } from "./RoleEditDto";
import type { FlatPermissionDto } from "./FlatPermissionDto";

export type GetRoleForEditOutput = {
    role?: RoleEditDto | undefined;
    /**
    * @type array | undefined
    */
    permissions?: FlatPermissionDto[] | undefined;
    /**
    * @type array | undefined
    */
    grantedPermissionNames?: string[] | undefined;
};
