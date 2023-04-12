export type UserLockOutSettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    isEnabled?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    maxFailedAccessAttemptsBeforeLockout?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    defaultAccountLockoutSeconds?: number | undefined;
};
