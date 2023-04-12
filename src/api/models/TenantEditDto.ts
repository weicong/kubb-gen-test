export type TenantEditDto = {
    /**
    * @type string
    */
    tenancyName: string;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string | undefined
    */
    connectionString?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateUtc?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isInTrialPeriod?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};
