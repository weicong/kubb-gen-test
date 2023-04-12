import type { PurchasePackageItemDto } from "./PurchasePackageItemDto";

export type PagedResultDtoOfPurchasePackageItemDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PurchasePackageItemDto[] | undefined;
};
