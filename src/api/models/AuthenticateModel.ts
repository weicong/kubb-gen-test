export type AuthenticateModel = {
    /**
    * @type string
    */
    userNameOrEmailAddress: string;
    /**
    * @type string
    */
    password: string;
    /**
    * @type boolean | undefined
    */
    rememberClient?: boolean | undefined;
};
