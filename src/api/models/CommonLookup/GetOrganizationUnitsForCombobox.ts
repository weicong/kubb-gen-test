import type { ListResultDtoOfOrganizationUnitComboboxItemDto } from "../ListResultDtoOfOrganizationUnitComboboxItemDto";

export type GetOrganizationUnitsForComboboxQueryParams = {
    /**
    * @type boolean | undefined
    */
    onlyUserOrganizationUnits?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    onlyRootItems?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    useDisplayCodeAsValue?: boolean | undefined;
};

/**
* @description Success
*/
export type GetOrganizationUnitsForComboboxResponse = ListResultDtoOfOrganizationUnitComboboxItemDto;
