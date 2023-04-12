import type { PagedResultDtoOfTicketDto } from "../PagedResultDtoOfTicketDto";

export type GetAllQueryParams = {
    /**
    * @description 购置时间范围
    * @type array | undefined
    */
    buyTimeRange?: string[] | undefined;
    /**
    * @description 票据类型Id
    * @type integer | undefined int64
    */
    ticketTypeId?: number | undefined;
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
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
export type GetAllResponse = PagedResultDtoOfTicketDto;
