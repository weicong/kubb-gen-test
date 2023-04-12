import type { GetProfilePictureOutput } from "../GetProfilePictureOutput";

export type GetProfilePictureByUserQueryParams = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
};

/**
* @description Success
*/
export type GetProfilePictureByUserResponse = GetProfilePictureOutput;
