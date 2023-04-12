import type { ImpersonatedAuthenticateResultModel } from "../ImpersonatedAuthenticateResultModel";

export type ImpersonatedAuthenticateQueryParams = {
    /**
    * @type string | undefined
    */
    impersonationToken?: string | undefined;
};

export type ImpersonatedAuthenticateRequest = any | null;

/**
* @description Success
*/
export type ImpersonatedAuthenticateResponse = ImpersonatedAuthenticateResultModel;
