export type CreatePostDto = {
    /**
    * @type integer | undefined int64
    */
    blogId?: number | undefined;
    /**
    * @type string
    */
    title: string;
    /**
    * @type string | undefined
    */
    coverImage?: string | undefined;
    /**
    * @type string | undefined
    */
    url?: string | undefined;
    /**
    * @type string
    */
    content: string;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
};
