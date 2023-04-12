import type { OrganizationUnitInfoDto } from "./OrganizationUnitInfoDto";

export type UpdateOrganizationUnitInfoInput = {
    organizationUnit: OrganizationUnitInfoDto;
    /**
    * @type boolean | undefined
    */
    updateChildren?: boolean | undefined;
};
