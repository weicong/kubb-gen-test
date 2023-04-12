export type EmailSettingsEditDto = {
    /**
    * @type string | undefined
    */
    defaultFromAddress?: string | undefined;
    /**
    * @type string | undefined
    */
    defaultFromDisplayName?: string | undefined;
    /**
    * @type string | undefined
    */
    smtpHost?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    smtpPort?: number | undefined;
    /**
    * @type string | undefined
    */
    smtpUserName?: string | undefined;
    /**
    * @type string | undefined
    */
    smtpPassword?: string | undefined;
    /**
    * @type string | undefined
    */
    smtpDomain?: string | undefined;
    /**
    * @type boolean | undefined
    */
    smtpEnableSsl?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    smtpUseDefaultCredentials?: boolean | undefined;
};
