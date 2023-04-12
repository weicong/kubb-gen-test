import type { TicketDto } from "./TicketDto";

export type PagedResultDtoOfTicketDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: TicketDto[] | undefined;
};
