import type { GeneralSettingsEditDto } from "./GeneralSettingsEditDto";
import type { TenantUserManagementSettingsEditDto } from "./TenantUserManagementSettingsEditDto";
import type { TenantEmailSettingsEditDto } from "./TenantEmailSettingsEditDto";
import type { LdapSettingsEditDto } from "./LdapSettingsEditDto";
import type { SecuritySettingsEditDto } from "./SecuritySettingsEditDto";
import type { TenantBillingSettingsEditDto } from "./TenantBillingSettingsEditDto";
import type { TenantOtherSettingsEditDto } from "./TenantOtherSettingsEditDto";

export type TenantSettingsEditDto = {
    general?: GeneralSettingsEditDto | undefined;
    userManagement: TenantUserManagementSettingsEditDto;
    email?: TenantEmailSettingsEditDto | undefined;
    ldap?: LdapSettingsEditDto | undefined;
    security: SecuritySettingsEditDto;
    billing?: TenantBillingSettingsEditDto | undefined;
    otherSettings?: TenantOtherSettingsEditDto | undefined;
};
