export type UpdateAssetFixedReportDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 固定资产类型 0:房屋及构筑物 1：通用设备 2:专用设备 3：图书及档案 4:家具用具装具及动植物
    * @type integer | undefined int32
    */
    fixedAssetType?: number | undefined;
    /**
    * @description 年
    * @type integer | undefined int32
    */
    year?: number | undefined;
    /**
    * @description 月
    * @type integer | undefined int32
    */
    month?: number | undefined;
    /**
    * @description 科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};
