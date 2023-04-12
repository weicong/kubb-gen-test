export type EditionCreateDto = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
    /**
    * @type string
    */
    displayName: string;
    /**
    * @type number | undefined double
    */
    dailyPrice?: number | undefined;
    /**
    * @type number | undefined double
    */
    weeklyPrice?: number | undefined;
    /**
    * @type number | undefined double
    */
    monthlyPrice?: number | undefined;
    /**
    * @type number | undefined double
    */
    annualPrice?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    trialDayCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    waitingDayAfterExpire?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    expiringEditionId?: number | undefined;
};
