import type { ChatSide } from "./ChatSide";
import type { ChatMessageReadState } from "./ChatMessageReadState";

export type ChatMessageDto = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    targetUserId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    targetTenantId?: number | undefined;
    side?: ChatSide | undefined;
    readState?: ChatMessageReadState | undefined;
    receiverReadState?: ChatMessageReadState | undefined;
    /**
    * @type string | undefined
    */
    message?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type string | undefined
    */
    sharedMessageId?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};
