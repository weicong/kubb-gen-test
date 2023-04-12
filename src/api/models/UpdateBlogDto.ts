export type UpdateBlogDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    shortName: string;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
};
