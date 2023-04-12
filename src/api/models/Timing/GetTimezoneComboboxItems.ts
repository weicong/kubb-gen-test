import type { ComboboxItemDto } from "../ComboboxItemDto";

export type GetTimezoneComboboxItemsQueryParams = {
    /**
    * @type string | undefined
    */
    selectedTimezoneId?: string | undefined;
};

/**
* @description Success
*/
export type GetTimezoneComboboxItemsResponse = ComboboxItemDto[];
