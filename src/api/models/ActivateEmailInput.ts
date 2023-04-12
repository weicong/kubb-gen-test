export type ActivateEmailInput = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string | undefined
    */
    confirmationCode?: string | undefined;
    /**
    * @description Encrypted values for {TenantId}, {UserId} and {ConfirmationCode}
    * @type string | undefined
    */
    c?: string | undefined;
};
