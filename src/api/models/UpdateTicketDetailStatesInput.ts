import type { TicketDetailState } from "./TicketDetailState";

export type UpdateTicketDetailStatesInput = {
    /**
    * @type integer int64
    */
    ticketId: number;
    /**
    * @type integer int32
    */
    startNumber: number;
    /**
    * @type integer int32
    */
    endNumber: number;
    states: TicketDetailState;
    /**
    * @description 科室id
    * @type integer int64
    */
    organizationUnitId: number;
    /**
    * @description 使用者id
    * @type integer int64
    */
    userId: number;
};
