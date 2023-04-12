import type { ListResultDtoOfApprovalProcessDto } from "../ListResultDtoOfApprovalProcessDto";

export type GetAllApprovalProcessesForEntityQueryParams = {
    /**
    * @description 实体类型
    * @type string | undefined
    */
    entityTypeName?: string | undefined;
    /**
    * @description 实体Id
    * @type integer | undefined int64
    */
    entityId?: number | undefined;
    /**
    * @description 主题
    * @type string | undefined
    */
    subject?: string | undefined;
};

/**
* @description Success
*/
export type GetAllApprovalProcessesForEntityResponse = ListResultDtoOfApprovalProcessDto;
