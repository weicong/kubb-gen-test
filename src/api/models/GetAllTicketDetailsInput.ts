import type { TicketDetailState } from "./TicketDetailState";

export type GetAllTicketDetailsInput = {
    /**
    * @type integer | undefined int64
    */
    ticketId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    startNumber?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    endNumber?: number | undefined;
    states?: TicketDetailState | undefined;
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
