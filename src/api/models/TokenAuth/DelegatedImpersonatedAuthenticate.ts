import type { ImpersonatedAuthenticateResultModel } from "../ImpersonatedAuthenticateResultModel";

export type DelegatedImpersonatedAuthenticateQueryParams = {
    /**
    * @type integer | undefined int64
    */
    userDelegationId?: number | undefined;
    /**
    * @type string | undefined
    */
    impersonationToken?: string | undefined;
};

export type DelegatedImpersonatedAuthenticateRequest = any | null;

/**
* @description Success
*/
export type DelegatedImpersonatedAuthenticateResponse = ImpersonatedAuthenticateResultModel;
