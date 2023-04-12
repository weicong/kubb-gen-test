import type { ApprovalProcessDto } from "../ApprovalProcessDto";

export type GetQueryParams = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetResponse = ApprovalProcessDto;
