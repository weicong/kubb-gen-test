import type { ListResultDtoOfStandardCatalogDto } from "../ListResultDtoOfStandardCatalogDto";

export type GetAllQueryParams = {
    /**
    * @description 搜索关键字 TODO: 目录前仅对 FlatItems 有效，Tree 需要用 ConvertToTree(flatItems)
    * @type string | undefined
    */
    keyWords?: string | undefined;
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
export type GetAllResponse = ListResultDtoOfStandardCatalogDto;
