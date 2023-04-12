import type { TicketDetailDto } from "./TicketDetailDto";

export type PagedResultDtoOfTicketDetailDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: TicketDetailDto[] | undefined;
};
