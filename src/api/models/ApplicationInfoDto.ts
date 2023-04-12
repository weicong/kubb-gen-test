export type ApplicationInfoDto = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    copyrights?: string | undefined;
    /**
    * @type string | undefined
    */
    tenantSuffix?: string | undefined;
    /**
    * @type string | undefined
    */
    version?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    releaseDate?: string | undefined;
    /**
    * @type string | undefined
    */
    currency?: string | undefined;
    /**
    * @type string | undefined
    */
    currencySign?: string | undefined;
    /**
    * @type boolean | undefined
    */
    allowTenantsToChangeEmailSettings?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    userDelegationIsEnabled?: boolean | undefined;
    /**
    * @type object | undefined
    */
    features?: {
        [key: string]: boolean;
    } | undefined;
};
