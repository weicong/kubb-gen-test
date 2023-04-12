export type RoleEditDto = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isDefault?: boolean | undefined;
};
