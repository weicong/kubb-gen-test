import type { TenantEditDto } from "../TenantEditDto";

export type GetTenantForEditQueryParams = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
};

/**
* @description Success
*/
export type GetTenantForEditResponse = TenantEditDto;
