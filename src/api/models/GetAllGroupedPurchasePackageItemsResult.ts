import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";
import type { GroupedPurchasePackageItemDto } from "./GroupedPurchasePackageItemDto";

export type GetAllGroupedPurchasePackageItemsResult = {
    /**
    * @type array | undefined
    */
    flatList?: PurchasePackageItemDto[] | undefined;
    /**
    * @type array | undefined
    */
    groupedList?: GroupedPurchasePackageItemDto[] | undefined;
};
