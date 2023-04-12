import type { GetProfilePictureOutput } from "../GetProfilePictureOutput";

export type GetFriendProfilePictureQueryParams = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
};

/**
* @description Success
*/
export type GetFriendProfilePictureResponse = GetProfilePictureOutput;
