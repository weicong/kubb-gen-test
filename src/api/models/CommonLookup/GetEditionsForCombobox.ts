import type { ListResultDtoOfSubscribableEditionComboboxItemDto } from "../ListResultDtoOfSubscribableEditionComboboxItemDto";

export type GetEditionsForComboboxQueryParams = {
    /**
    * @type boolean | undefined
    */
    onlyFreeItems?: boolean | undefined;
};

/**
* @description Success
*/
export type GetEditionsForComboboxResponse = ListResultDtoOfSubscribableEditionComboboxItemDto;
