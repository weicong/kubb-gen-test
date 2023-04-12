export type FlatPermissionWithLevelDto = {
    /**
    * @type integer | undefined int32
    */
    level?: number | undefined;
    /**
    * @type string | undefined
    */
    parentName?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isGrantedByDefault?: boolean | undefined;
};
