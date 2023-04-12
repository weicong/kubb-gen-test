export type AssetInfo = {
    /**
    * @description 资产类型
    * @type integer | undefined int32
    */
    fixedAssetType?: number | undefined;
    /**
    * @description 资产编号
    * @type string | undefined
    */
    assetCode?: string | undefined;
    /**
    * @description 资产名称
    * @type string | undefined
    */
    assetName?: string | undefined;
    /**
    * @description 资产型号
    * @type string | undefined
    */
    model?: string | undefined;
    /**
    * @description 资产存放位置
    * @type string | undefined
    */
    storagePlace?: string | undefined;
    /**
    * @description 资产原值，原值原币
    * @type number | undefined double
    */
    originalValue?: number | undefined;
    /**
    * @description 累计折旧
    * @type string | undefined
    */
    depreciation?: string | undefined;
    /**
    * @description 资产数量
    * @type number | undefined double
    */
    "number"?: number | undefined;
    /**
    * @description 计量单位
    * @type string | undefined
    */
    unit?: string | undefined;
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
    * @description 资产使用时间
    * @type string | undefined date-time
    */
    useTime?: string | undefined;
    /**
    * @description 固资类别名称，资产类别
    * @type string | undefined
    */
    assetCategory?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
