import type { PurchaseApplyDto } from "./PurchaseApplyDto";

export type PagedResultDtoOfPurchaseApplyDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PurchaseApplyDto[] | undefined;
};
