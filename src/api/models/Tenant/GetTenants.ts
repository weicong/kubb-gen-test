import type { PagedResultDtoOfTenantListDto } from "../PagedResultDtoOfTenantListDto";

export type GetTenantsQueryParams = {
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateStart?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    subscriptionEndDateEnd?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationDateStart?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationDateEnd?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    editionId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    editionIdSpecified?: boolean | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetTenantsResponse = PagedResultDtoOfTenantListDto;
