import type { AssetUseState } from "./AssetUseState";

export type UpdateAssetFixedDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 固定资产类型 0:房屋及构筑物 1：通用设备 2:专用设备 3：图书及档案 4:家具用具装具及动植物
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
    * @description 使用人Id
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    useState?: AssetUseState | undefined;
    /**
    * @description 固定资产编码
    * @type string | undefined
    */
    assetCode?: string | undefined;
    /**
    * @description 固定资产名称
    * @type string | undefined
    */
    assetName?: string | undefined;
    /**
    * @description 固资类别名称，资产类别
    * @type string | undefined
    */
    assetCategory?: string | undefined;
    /**
    * @description 规格型号
    * @type string | undefined
    */
    model?: string | undefined;
    /**
    * @description 原值，原值原币
    * @type string | undefined
    */
    originalValue?: string | undefined;
    /**
    * @description 累计折旧
    * @type string | undefined
    */
    depreciation?: string | undefined;
    /**
    * @description 净值
    * @type string | undefined
    */
    netWorth?: string | undefined;
    /**
    * @description 责任部门名称，使用科室，导入值“血液供应科”去查OrganizationUnitId
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 管理部门，归口科室，导入值“21 设备处”去查ManageOrganizationUnitId
    * @type string | undefined
    */
    manageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 存放地点
    * @type string | undefined
    */
    storagePlace?: string | undefined;
    /**
    * @description 计量单位
    * @type string | undefined
    */
    unit?: string | undefined;
    /**
    * @description 资产数量
    * @type string | undefined
    */
    "number"?: string | undefined;
    /**
    * @description 建造单位，供应商
    * @type string | undefined
    */
    supplier?: string | undefined;
    /**
    * @description 预计期间或总工作量，使用寿命
    * @type string | undefined
    */
    totalLife?: string | undefined;
    /**
    * @description 已提折旧期间数
    * @type string | undefined
    */
    alreadyDepreciate?: string | undefined;
    /**
    * @description 开始使用日期
    * @type string | undefined
    */
    useTime?: string | undefined;
};
