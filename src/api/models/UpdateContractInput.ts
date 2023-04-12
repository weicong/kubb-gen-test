import type { ProcurementType } from "./ProcurementType";
import type { ContractCommonItemDto } from "./ContractCommonItemDto";
import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";

export type UpdateContractInput = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    expensesType?: ProcurementType | undefined;
    /**
    * @description 有无合同
    * @type integer | undefined int32
    */
    contractState?: number | undefined;
    /**
    * @description 合同标题
    * @type string | undefined
    */
    title?: string | undefined;
    /**
    * @description 合同编号（唯一）
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description 供应商
    * @type string | undefined
    */
    supplyCompany?: string | undefined;
    /**
    * @description 对方法定代表人
    * @type string | undefined
    */
    legalRepresentative?: string | undefined;
    /**
    * @description 采购方式
    * @type string | undefined
    */
    buyType?: string | undefined;
    /**
    * @description 合同期限
    * @type string | undefined
    */
    timeLimit?: string | undefined;
    /**
    * @description 使用科室id
    * @type integer | undefined int64
    */
    usageOrganizationUnitId?: number | undefined;
    /**
    * @description 经办人Id
    * @type integer | undefined int64
    */
    managementUserId?: number | undefined;
    /**
    * @description 非政采项目
    * @type array | undefined
    */
    contractCommonItems?: ContractCommonItemDto[] | undefined;
    /**
    * @description 政采项目（分包）
    * @type array | undefined
    */
    purchasePackageItems?: PurchasePackageItemDto[] | undefined;
    /**
    * @description 草拟金额
    * @type number | undefined double
    */
    unMoney?: number | undefined;
    /**
    * @description 送审资料清单
    * @type string | undefined
    */
    approvalNote?: string | undefined;
    /**
    * @description 合同备注（审批单情况说明）
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 提交科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 备案状态  0:未备案 1:备案
    * @type integer | undefined int32
    */
    finalState?: number | undefined;
    /**
    * @description 备案定稿 0：未定稿 1：定稿
    * @type integer | undefined int32
    */
    finalSave?: number | undefined;
    /**
    * @description 分多支付状态 0：未完成 1：完成
    * @type integer | undefined int32
    */
    paysState?: number | undefined;
};
