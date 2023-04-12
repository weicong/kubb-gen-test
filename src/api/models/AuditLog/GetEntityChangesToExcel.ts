import type { FileDto } from "../FileDto";

export type GetEntityChangesToExcelQueryParams = {
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
    entityTypeFullName?: string | undefined;
    /**
    * @type string | undefined
    */
    entityId?: string | undefined;
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
export type GetEntityChangesToExcelResponse = FileDto;
