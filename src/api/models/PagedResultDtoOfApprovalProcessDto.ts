import type { ApprovalProcessDto } from "./ApprovalProcessDto";

export type PagedResultDtoOfApprovalProcessDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: ApprovalProcessDto[] | undefined;
};
