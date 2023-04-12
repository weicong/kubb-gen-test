import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";

export type GroupedPurchasePackageItemDto = {
    /**
    * @type string | undefined
    */
    label?: string | undefined;
    purchasePackageItemInfo?: PurchasePackageItemDto | undefined;
    /**
    * @type array | undefined
    */
    children?: GroupedPurchasePackageItemDto[] | undefined;
};
