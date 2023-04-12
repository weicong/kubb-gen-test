import type { FileDto } from "../FileDto";

export type GetAuditLogsToExcelQueryParams = {
    /**
    * @type string | undefined date-time
    */
    startDate?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    endDate?: string | undefined;
    /**
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @type string | undefined
    */
    serviceName?: string | undefined;
    /**
    * @type string | undefined
    */
    methodName?: string | undefined;
    /**
    * @type string | undefined
    */
    browserInfo?: string | undefined;
    /**
    * @type boolean | undefined
    */
    hasException?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    minExecutionDuration?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxExecutionDuration?: number | undefined;
    /**
    * @type boolean | undefined
    */
    excludeAdmin?: boolean | undefined;
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
export type GetAuditLogsToExcelResponse = FileDto;
