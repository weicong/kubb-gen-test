export type ExternalAuthenticateModel = {
    /**
    * @type string
    */
    authProvider: string;
    /**
    * @type string
    */
    providerKey: string;
    /**
    * @type string
    */
    providerAccessCode: string;
    /**
    * @type string | undefined
    */
    returnUrl?: string | undefined;
    /**
    * @type boolean | undefined
    */
    singleSignIn?: boolean | undefined;
};
