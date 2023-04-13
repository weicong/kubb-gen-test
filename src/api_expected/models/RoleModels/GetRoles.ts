import type { ListResultDtoOfRoleListDto } from "../ListResultDtoOfRoleListDto";

export type GetRolesQueryParams = {
    /**
    * @type string | undefined
    */
    permission?: string | undefined;
};

/**
* @description Success
*/
export type GetRolesResponse = ListResultDtoOfRoleListDto;
