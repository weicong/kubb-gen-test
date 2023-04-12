import type { Contract } from "./Contract";
import type { ContractCommonItem } from "./ContractCommonItem";
import type { PurchasePackageItem } from "./PurchasePackageItem";
import type { User } from "./User";

export type ContractPackage = {
    /**
    * @description 合同Id
    * @type integer | undefined int64
    */
    contractId?: number | undefined;
    contract?: Contract | undefined;
    /**
    * @description 非政采合同 非政采情况报告单
    * @type integer | undefined int64
    */
    contractCommonItemId?: number | undefined;
    contractCommonItem?: ContractCommonItem | undefined;
    /**
    * @description 政采合同 政采分包条目(小包)id
    * @type integer | undefined int64
    */
    purchasePackageItemId?: number | undefined;
    purchasePackageItem?: PurchasePackageItem | undefined;
    /**
    * @description 总金额
    * @type number | undefined double
    */
    payMoney?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    deleterUser?: User | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
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
