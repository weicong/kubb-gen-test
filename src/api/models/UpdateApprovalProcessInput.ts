import type { ApprovalState } from "./ApprovalState";

export type UpdateApprovalProcessInput = {
    approvalState?: ApprovalState | undefined;
    /**
    * @description 审批意见
    * @type string | undefined
    */
    comments?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
