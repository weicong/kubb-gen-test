export type UserRoleDto = {
    /**
    * @type integer | undefined int32
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
    * @type boolean | undefined
    */
    isAssigned?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    inheritedFromOrganizationUnit?: boolean | undefined;
};
