export type PasswordComplexitySetting = {
    /**
    * @type boolean | undefined
    */
    requireDigit?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    requireLowercase?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    requireNonAlphanumeric?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    requireUppercase?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    requiredLength?: number | undefined;
};
