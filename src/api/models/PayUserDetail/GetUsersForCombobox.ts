import type { ListResultDtoOfUserComboboxItemDto } from "../ListResultDtoOfUserComboboxItemDto";

export type GetUsersForComboboxQueryParams = {
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
    /**
    * @type boolean | undefined
    */
    excludeCurrentUser?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};

/**
* @description Success
*/
export type GetUsersForComboboxResponse = ListResultDtoOfUserComboboxItemDto;
