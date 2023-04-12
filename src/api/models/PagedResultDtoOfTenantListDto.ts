import type { TenantListDto } from "./TenantListDto";

export type PagedResultDtoOfTenantListDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: TenantListDto[] | undefined;
};
