import type { GetProfilePictureOutput } from "../GetProfilePictureOutput";

export type GetProfilePictureByUserNameQueryParams = {
    /**
    * @type string | undefined
    */
    username?: string | undefined;
};

/**
* @description Success
*/
export type GetProfilePictureByUserNameResponse = GetProfilePictureOutput;
