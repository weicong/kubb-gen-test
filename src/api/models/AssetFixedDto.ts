import type { AssetUseState } from "./AssetUseState";

export type AssetFixedDto = {
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
    * @type string | undefined
    */
    fixedAssetTypeDisplayName?: string | undefined;
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
    /**
    * @description 使用人
    * @type string | undefined
    */
    userName?: string | undefined;
    useState?: AssetUseState | undefined;
    /**
    * @description 序号（导出时显示）
    * @type integer | undefined int32
    */
    rowNumber?: number | undefined;
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
    * @type number | undefined double
    */
    originalValue?: number | undefined;
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
    * @type number | undefined double
    */
    "number"?: number | undefined;
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
    * @type string | undefined date-time
    */
    useTime?: string | undefined;
    /**
    * @description 资产组名称
    * @type string | undefined
    */
    groupName?: string | undefined;
    /**
    * @description 变动方式
    * @type string | undefined
    */
    changeType?: string | undefined;
    /**
    * @description 制造商
    * @type string | undefined
    */
    manufacturer?: string | undefined;
    /**
    * @description 产地
    * @type string | undefined
    */
    origin?: string | undefined;
    /**
    * @description 入账日期
    * @type string | undefined
    */
    entryTime?: string | undefined;
    /**
    * @description 经济用途
    * @type string | undefined
    */
    purpose?: string | undefined;
    /**
    * @description 折旧方法
    * @type string | undefined
    */
    depreciationMethod?: string | undefined;
    /**
    * @description 币别
    * @type string | undefined
    */
    currency?: string | undefined;
    /**
    * @description 汇率
    * @type string | undefined
    */
    exchangeRate?: string | undefined;
    /**
    * @description 原值本币
    * @type string | undefined
    */
    realValue?: string | undefined;
    /**
    * @description 进项税额
    * @type string | undefined
    */
    inputTax?: string | undefined;
    /**
    * @description 减值准备
    * @type string | undefined
    */
    impairment?: string | undefined;
    /**
    * @description 净额
    * @type string | undefined
    */
    netAmount?: string | undefined;
    /**
    * @description 预计净残值
    * @type string | undefined
    */
    expectValue?: string | undefined;
    /**
    * @description 本期折旧额
    * @type string | undefined
    */
    oneDepreciation?: string | undefined;
    /**
    * @description 剩余寿命
    * @type string | undefined
    */
    lastLife?: string | undefined;
    /**
    * @description 备注
    * @type string | undefined
    */
    remark?: string | undefined;
    /**
    * @description 固定资产科目
    * @type string | undefined
    */
    assetSubject?: string | undefined;
    /**
    * @description 累计折旧科目
    * @type string | undefined
    */
    depreciationSubject?: string | undefined;
    /**
    * @description 折旧费用项目
    * @type string | undefined
    */
    assignSubject?: string | undefined;
    /**
    * @description 成本中心代码
    * @type string | undefined
    */
    costCode?: string | undefined;
    /**
    * @description 成本中心名称
    * @type string | undefined
    */
    costName?: string | undefined;
    /**
    * @description 工作中心代码
    * @type string | undefined
    */
    workCode?: string | undefined;
    /**
    * @description 工作中心代码
    * @type string | undefined
    */
    workName?: string | undefined;
    /**
    * @description 条形码
    * @type string | undefined
    */
    barCode?: string | undefined;
    /**
    * @description 变更Id
    * @type integer | undefined int64
    */
    assetChangeId?: number | undefined;
    /**
    * @description 可变更
    * @type boolean | undefined
    */
    canChange?: boolean | undefined;
};
