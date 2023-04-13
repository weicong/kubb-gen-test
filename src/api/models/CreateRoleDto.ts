export type CreateRoleDto = {
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @type string | undefined
    */
    normalizedName?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type array | undefined
    */
    grantedPermissions?: string[] | undefined;
};
