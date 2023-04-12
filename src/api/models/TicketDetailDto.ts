import type { TicketDetailState } from "./TicketDetailState";

export type TicketDetailDto = {
    /**
    * @description 票据id
    * @type integer | undefined int64
    */
    ticketId?: number | undefined;
    /**
    * @description 票号
    * @type string | undefined
    */
    ticketNumber?: string | undefined;
    /**
    * @description 科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 使用者id
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @description 使用者
    * @type string | undefined
    */
    userName?: string | undefined;
    states?: TicketDetailState | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
