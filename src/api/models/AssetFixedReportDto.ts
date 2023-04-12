export type AssetFixedReportDto = {
    /**
    * @description 固定资产类型 0:房屋及构筑物 1：通用设备 2:专用设备 3：图书及档案 4:家具用具装具及动植物
    * @type integer | undefined int32
    */
    fixedAssetType?: number | undefined;
    /**
    * @type string | undefined
    */
    fixedAssetTypeDisplayName?: string | undefined;
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
    /**
    * @description 科室名称
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    /**
    * @description 已定稿（已提交审批）
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 定稿人（提交人）
    * @type string | undefined
    */
    submitterUserName?: string | undefined;
    /**
    * @description 定稿人Id（提交人Id）
    * @type integer | undefined int64
    */
    submitterUserId?: number | undefined;
    /**
    * @description 定稿时间（提交时间）
    * @type string | undefined date-time
    */
    submissionTime?: string | undefined;
    /**
    * @description 申请人科室Id
    * @type integer | undefined int64
    */
    submitterUserOrganizationUnitId?: number | undefined;
    /**
    * @description 申请人科室名称
    * @type string | undefined
    */
    submitterUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 创建人姓名
    * @type string | undefined
    */
    creatorUserName?: string | undefined;
    /**
    * @description 创建人所在科室Id
    * @type integer | undefined int64
    */
    creatorUserOrganizationUnitId?: number | undefined;
    /**
    * @description 创建人所在科室名称
    * @type string | undefined
    */
    creatorUserOrganizationUnitDisplayName?: string | undefined;
    /**
    * @description 修改人姓名
    * @type string | undefined
    */
    lastModifierUserName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
