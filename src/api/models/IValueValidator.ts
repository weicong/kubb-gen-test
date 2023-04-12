export type IValueValidator = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type object | undefined
    */
    attributes?: {
        [key: string]: object;
    } | undefined;
};
