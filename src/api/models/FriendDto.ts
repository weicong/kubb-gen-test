import type { FriendshipState } from "./FriendshipState";

export type FriendDto = {
    /**
    * @type integer | undefined int64
    */
    friendUserId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    friendTenantId?: number | undefined;
    /**
    * @type string | undefined
    */
    friendUserName?: string | undefined;
    /**
    * @type string | undefined
    */
    friendTenancyName?: string | undefined;
    /**
    * @type string | undefined uuid
    */
    friendProfilePictureId?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    unreadMessageCount?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isOnline?: boolean | undefined;
    state?: FriendshipState | undefined;
};
