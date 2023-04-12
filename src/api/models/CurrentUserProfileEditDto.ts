export type CurrentUserProfileEditDto = {
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
    * @type string
    */
    emailAddress: string;
    /**
    * @type string | undefined
    */
    phoneNumber?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isPhoneNumberConfirmed?: boolean | undefined;
    /**
    * @type string | undefined
    */
    timezone?: string | undefined;
    /**
    * @type string | undefined
    */
    qrCodeSetupImageUrl?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isGoogleAuthenticatorEnabled?: boolean | undefined;
    /**
    * @description 性别
    * @type string | undefined
    */
    gender?: string | undefined;
    /**
    * @description 职务
    * @type string | undefined
    */
    position?: string | undefined;
    /**
    * @description 职称
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 简介
    * @type string | undefined
    */
    biography?: string | undefined;
};
