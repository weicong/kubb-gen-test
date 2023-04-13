export type RoleEditDto = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
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
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isStatic?: boolean | undefined;
};
