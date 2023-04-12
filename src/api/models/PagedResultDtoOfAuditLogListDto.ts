import type { AuditLogListDto } from "./AuditLogListDto";

export type PagedResultDtoOfAuditLogListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: AuditLogListDto[] | undefined;
};
