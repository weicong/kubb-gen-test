import type { RefreshTokenResult } from "../RefreshTokenResult";

export type RefreshTokenQueryParams = {
    /**
    * @type string | undefined
    */
    refreshToken?: string | undefined;
};

export type RefreshTokenRequest = any | null;

/**
* @description Success
*/
export type RefreshTokenResponse = RefreshTokenResult;
