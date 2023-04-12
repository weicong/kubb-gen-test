import type { TicketTypeDto } from "./TicketTypeDto";

export type PagedResultDtoOfTicketTypeDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: TicketTypeDto[] | undefined;
};
