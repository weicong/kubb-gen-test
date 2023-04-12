import type { TicketState } from "./TicketState";

export type UpdateTicketStateInput = {
    state?: TicketState | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
