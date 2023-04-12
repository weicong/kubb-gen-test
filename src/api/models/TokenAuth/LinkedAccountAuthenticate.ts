import type { SwitchedAccountAuthenticateResultModel } from "../SwitchedAccountAuthenticateResultModel";

export type LinkedAccountAuthenticateQueryParams = {
    /**
    * @type string | undefined
    */
    switchAccountToken?: string | undefined;
};

export type LinkedAccountAuthenticateRequest = any | null;

/**
* @description Success
*/
export type LinkedAccountAuthenticateResponse = SwitchedAccountAuthenticateResultModel;
