import type { PagedResultDtoOfGetAllSendAttemptsOutput } from "../PagedResultDtoOfGetAllSendAttemptsOutput";

export type GetAllSendAttemptsQueryParams = {
    /**
    * @type string | undefined
    */
    subscriptionId?: string | undefined;
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
export type GetAllSendAttemptsResponse = PagedResultDtoOfGetAllSendAttemptsOutput;
