export type EditionSelectDto = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    expiringEditionId?: number | undefined;
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
    * @type boolean | undefined
    */
    isFree?: boolean | undefined;
    /**
    * @type object | undefined
    */
    additionalData?: {
        /**
        * @type object | undefined
        */
        Paypal?: {
            [key: string]: string;
        } | undefined;
        /**
        * @type object | undefined
        */
        Stripe?: {
            [key: string]: string;
        } | undefined;
    } | undefined;
};
