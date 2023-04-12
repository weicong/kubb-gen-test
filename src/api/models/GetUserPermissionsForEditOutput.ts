import type { FlatPermissionDto } from "./FlatPermissionDto";

export type GetUserPermissionsForEditOutput = {
    /**
    * @type array | undefined
    */
    permissions?: FlatPermissionDto[] | undefined;
    /**
    * @type array | undefined
    */
    grantedPermissionNames?: string[] | undefined;
};
