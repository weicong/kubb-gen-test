import type { GetRoleUsersOutput } from "../GetRoleUsersOutput";

export type GetRoleUsersQueryParams = {
    /**
    * @type string
    */
    roleDisplayName: string;
    /**
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
};

/**
* @description Success
*/
export type GetRoleUsersResponse = GetRoleUsersOutput;
