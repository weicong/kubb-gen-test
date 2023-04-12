import type { EditionListDto } from "./EditionListDto";

export type TenantListDto = {
    /**
    * @type string | undefined
    */
    tenancyName?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    editionDisplayName?: string | undefined;
    /**
    * @type string | undefined
    */
    connectionString?: string | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateUtc?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isInTrialPeriod?: boolean | undefined;
    edition?: EditionListDto | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};
