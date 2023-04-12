import type { PagedResultDtoOfAssetFixedDto } from "../PagedResultDtoOfAssetFixedDto";

export type GetAllQueryParams = {
    /**
    * @type array | undefined
    */
    ids?: number[] | undefined;
    /**
    * @description 固定资产类型
    * @type integer | undefined int32
    */
    fixedAssetType?: number | undefined;
    /**
    * @description 归口科室Id
    * @type integer | undefined int64
    */
    manageOrganizationUnitId?: number | undefined;
    /**
    * @description 使用科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 负责人
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @description 资产编码
    * @type string | undefined
    */
    assetCode?: string | undefined;
    /**
    * @description 资产名称
    * @type string | undefined
    */
    assetName?: string | undefined;
    /**
    * @description 使用日期范围
    * @type array | undefined
    */
    useTimeRange?: string[] | undefined;
    /**
    * @description 原值原币
    * @type array | undefined
    */
    originalValueRange?: number[] | undefined;
    /**
    * @description 累计折旧
    * @type array | undefined
    */
    depreciationRange?: number[] | undefined;
    /**
    * @description 净值
    * @type array | undefined
    */
    netWorthRange?: number[] | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfAssetFixedDto;
