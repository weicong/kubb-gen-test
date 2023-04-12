import type { ListResultDtoOfExpenditureCatalogDto } from "../ListResultDtoOfExpenditureCatalogDto";

export type GetAllQueryParams = {
    /**
    * @description 归口科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 适用于申报科室Id
    * @type integer | undefined int64
    */
    forOrganizationUnitId?: number | undefined;
    /**
    * @description 隐藏归口科室为申报科室的科目
    * @type boolean | undefined
    */
    hideOwnForOrganizationUnit?: boolean | undefined;
    /**
    * @description 最大级别（含）[数据库层过滤]
    * @type integer | undefined int32
    */
    maxLevel?: number | undefined;
    /**
    * @description 起始编码路径（指定 RootId 后则忽略此项）[数据库层过滤]
    * @type string | undefined
    */
    codeStarts?: string | undefined;
    /**
    * @description 根节点Id [数据库层过滤]
    * @type integer | undefined int64
    */
    rootId?: number | undefined;
    /**
    * @description 获取平面结果
    * @type boolean | undefined
    */
    getFlatItems?: boolean | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = ListResultDtoOfExpenditureCatalogDto;
