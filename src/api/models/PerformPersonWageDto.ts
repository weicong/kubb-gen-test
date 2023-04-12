import type { PostStatus } from "./PostStatus";

export type PerformPersonWageDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    month?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @type string | undefined
    */
    orgName?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    peopleState?: PostStatus | undefined;
    /**
    * @type integer | undefined int32
    */
    isoutdate?: number | undefined;
    /**
    * @type number | undefined double
    */
    postMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    xinJimoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    performance?: number | undefined;
    /**
    * @type number | undefined double
    */
    addedPerformance?: number | undefined;
    /**
    * @type number | undefined double
    */
    huLing?: number | undefined;
    /**
    * @type number | undefined double
    */
    erBao?: number | undefined;
    /**
    * @type number | undefined double
    */
    property?: number | undefined;
    /**
    * @type number | undefined double
    */
    womanWeisheng?: number | undefined;
    /**
    * @type number | undefined double
    */
    trialAllowance?: number | undefined;
    /**
    * @type number | undefined double
    */
    jiHuashengYu?: number | undefined;
    /**
    * @type number | undefined double
    */
    other?: number | undefined;
    /**
    * @type number | undefined double
    */
    other1?: number | undefined;
    /**
    * @type number | undefined double
    */
    other2?: number | undefined;
    /**
    * @type number | undefined double
    */
    shouldpay?: number | undefined;
    /**
    * @type number | undefined double
    */
    bonus?: number | undefined;
    /**
    * @type number | undefined double
    */
    reservedfunds?: number | undefined;
    /**
    * @type number | undefined double
    */
    memberdues?: number | undefined;
    /**
    * @type number | undefined double
    */
    retirementcost?: number | undefined;
    /**
    * @description 职业年金
    * @type number | undefined double
    */
    occupationalPension?: number | undefined;
    /**
    * @type number | undefined double
    */
    buckleProperty?: number | undefined;
    /**
    * @type number | undefined double
    */
    sickLeave?: number | undefined;
    /**
    * @type number | undefined double
    */
    unemployment?: number | undefined;
    /**
    * @type number | undefined double
    */
    debitFirst?: number | undefined;
    /**
    * @type number | undefined double
    */
    debitSecond?: number | undefined;
    /**
    * @type number | undefined double
    */
    debitThird?: number | undefined;
    /**
    * @type number | undefined double
    */
    phoneMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    healthMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    paytaxMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    subtractMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    shouldpaytax?: number | undefined;
    /**
    * @type number | undefined double
    */
    taxrate?: number | undefined;
    /**
    * @type number | undefined double
    */
    quickDeduction?: number | undefined;
    /**
    * @type number | undefined double
    */
    finalMoney?: number | undefined;
    /**
    * @type number | undefined double
    */
    peopleTax?: number | undefined;
    /**
    * @type number | undefined double
    */
    realMoney?: number | undefined;
    /**
    * @type string | undefined
    */
    remark?: string | undefined;
};
