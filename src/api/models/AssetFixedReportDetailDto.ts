export type AssetFixedReportDetailDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 序号（导出时显示）
    * @type integer | undefined int32
    */
    rowNumber?: number | undefined;
    /**
    * @description 固定资产上报总表id
    * @type integer | undefined int32
    */
    assetFixedReportId?: number | undefined;
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
    * @description 资产应有数量
    * @type string | undefined
    */
    totalNum?: string | undefined;
    /**
    * @description 科室上报数量
    * @type string | undefined
    */
    reportNum?: string | undefined;
    /**
    * @description 描述内容
    * @type string | undefined
    */
    content?: string | undefined;
    /**
    * @description 资产规格
    * @type string | undefined
    */
    model?: string | undefined;
    /**
    * @description 取得日期
    * @type string | undefined date-time
    */
    useTime?: string | undefined;
    /**
    * @description 原值，原值原币
    * @type number | undefined double
    */
    originalValue?: number | undefined;
    /**
    * @description 单价
    * @type number | undefined double
    */
    unitPrice?: number | undefined;
    /**
    * @description 实际盘点 - 总价
    * @type number | undefined double
    */
    reportTotalPrice?: number | undefined;
    /**
    * @description 盈亏数量
    * @type number | undefined double
    */
    profitQuantity?: number | undefined;
    /**
    * @description 使用科室
    * @type string | undefined
    */
    usageOrganizationUnit?: string | undefined;
    /**
    * @description 归口科室
    * @type string | undefined
    */
    manageOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 存放地点
    * @type string | undefined
    */
    storagePlace?: string | undefined;
};
