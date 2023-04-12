import type { FriendDto } from "./FriendDto";

export type GetUserChatFriendsWithSettingsOutput = {
    /**
    * @type string | undefined date-time
    */
    serverTime?: string | undefined;
    /**
    * @type array | undefined
    */
    friends?: FriendDto[] | undefined;
};
