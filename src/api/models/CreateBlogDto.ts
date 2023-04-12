export type CreateBlogDto = {
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
