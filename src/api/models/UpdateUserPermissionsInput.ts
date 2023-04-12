export type UpdateUserPermissionsInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type array
    */
    grantedPermissionNames: string[];
};
