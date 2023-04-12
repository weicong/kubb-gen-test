import type { TicketState } from "./TicketState";

export type TicketDto = {
    /**
    * @description 票据名称
    * @type string | undefined
    */
    ticketName?: string | undefined;
    /**
    * @description 票据类型Id
    * @type integer | undefined int64
    */
    ticketTypeId?: number | undefined;
    /**
    * @description 票据类型
    * @type string | undefined
    */
    ticketTypeName?: string | undefined;
    /**
    * @description 号段起始
    * @type integer | undefined int32
    */
    startNum?: number | undefined;
    /**
    * @description 号段终止
    * @type integer | undefined int32
    */
    endNum?: number | undefined;
    /**
    * @description 票据数量
    * @type integer | undefined int32
    */
    "number"?: number | undefined;
    /**
    * @description 购置时间
    * @type string | undefined date-time
    */
    buyTime?: string | undefined;
    /**
    * @description 经办人
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    state?: TicketState | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
