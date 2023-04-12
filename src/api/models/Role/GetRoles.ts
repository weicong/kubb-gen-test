import type { ListResultDtoOfRoleListDto } from "../ListResultDtoOfRoleListDto";

export type GetRolesQueryParams = {
    /**
    * @type string | undefined
    */
    roleName?: string | undefined;
    /**
    * @type array | undefined
    */
    permissions?: string[] | undefined;
};

/**
* @description Success
*/
export type GetRolesResponse = ListResultDtoOfRoleListDto;
