import type { IInputType } from "../IInputType";

export type FindAllowedInputTypeQueryParams = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
};

export type FindAllowedInputTypeRequest = any | null;

/**
* @description Success
*/
export type FindAllowedInputTypeResponse = IInputType;
