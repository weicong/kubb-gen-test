export type RegisterInput = {
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    surname: string;
    /**
    * @type string
    */
    userName: string;
    /**
    * @type string email
    */
    emailAddress: string;
    /**
    * @type string
    */
    password: string;
    /**
    * @type string | undefined
    */
    captchaResponse?: string | undefined;
};
