export type ExternalLoginProviderInfoModel = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    clientId?: string | undefined;
    /**
    * @type object | undefined
    */
    additionalParams?: {
        [key: string]: string;
    } | undefined;
};
