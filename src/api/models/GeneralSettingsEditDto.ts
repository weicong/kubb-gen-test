export type GeneralSettingsEditDto = {
    /**
    * @type string | undefined
    */
    timezone?: string | undefined;
    /**
    * @description This value is only used for comparing user's timezone to default timezone
    * @type string | undefined
    */
    timezoneForComparison?: string | undefined;
};
