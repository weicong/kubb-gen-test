import type { UserEditDto } from "./UserEditDto";
import type { UserRoleDto } from "./UserRoleDto";
import type { OrganizationUnitDto } from "./OrganizationUnitDto";

export type GetUserForEditOutput = {
    /**
    * @type string | undefined uuid
    */
    profilePictureId?: string | undefined;
    user?: UserEditDto | undefined;
    /**
    * @type array | undefined
    */
    roles?: UserRoleDto[] | undefined;
    /**
    * @type array | undefined
    */
    allOrganizationUnits?: OrganizationUnitDto[] | undefined;
    /**
    * @type array | undefined
    */
    userOrganizationUnits?: string[] | undefined;
};
