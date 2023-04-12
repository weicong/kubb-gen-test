import type { ListResultDtoOfChatMessageDto } from "../ListResultDtoOfChatMessageDto";

export type GetUserChatMessagesQueryParams = {
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    minMessageId?: number | undefined;
};

/**
* @description Success
*/
export type GetUserChatMessagesResponse = ListResultDtoOfChatMessageDto;
