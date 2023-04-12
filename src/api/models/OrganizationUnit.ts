
export type OrganizationUnit = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    parent?: OrganizationUnit | undefined;
    /**
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @type string
    */
    code: string;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @type array | undefined
    */
    children?: OrganizationUnit[] | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
