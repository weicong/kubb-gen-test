import type { SubscribableEditionComboboxItemDto } from "../SubscribableEditionComboboxItemDto";

export type GetEditionComboboxItemsQueryParams = {
    /**
    * @type integer | undefined int32
    */
    selectedEditionId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    addAllItem?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    onlyFreeItems?: boolean | undefined;
};

/**
* @description Success
*/
export type GetEditionComboboxItemsResponse = SubscribableEditionComboboxItemDto[];
